from rest_framework.serializers import *
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.core.cache import cache
from django.contrib.auth.hashers import check_password
from .models import User, EnterpriseRegisterRecord
from enterprise.models import Enterprise


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "username", "is_enterprise", "is_delete"]


class UserUpdateSerializer(Serializer):
    user = HiddenField(default=CurrentUserDefault())
    raw_password = CharField(style={'input_type': 'password'}, write_only=True)
    new_password = CharField(style={'input_type': 'password'}, write_only=True)
    new_password_confirm = CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        fields = ["user", "raw_password", "new_password", "new_password_confirm"]

    def update(self, instance, validated_data):
        raw_password = validated_data['raw_password']
        new_password = validated_data['new_password']
        new_password_confirm = validated_data['new_password_confirm']
        if not check_password(raw_password, instance.password):
            raise ValidationError("原密码错误")
        if raw_password == new_password:
            raise ValidationError("新密码不能与原密码一致")
        if new_password != new_password_confirm:
            raise ValidationError("两次输入的新密码不一致")

        instance.set_password(validated_data['new_password'])
        instance.save()
        return instance


class UserRegisterSerializer(ModelSerializer):
    # write_only=True:只能前端到后端
    # read_only=True:只能后端到前端
    # required=True:必须有字段名
    # allow_blank=False:必须有值
    id = IntegerField(read_only=True)
    code = CharField(max_length=5, min_length=5, required=True, write_only=True)
    email = EmailField(validators=[UniqueValidator(queryset=User.objects.all(), message="邮箱已被注册")])
    password = CharField(style={'input_type': 'password'}, write_only=True)
    password_confirm = CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id', "email", "code", "password", "password_confirm"]

    def create(self, validated_data):
        user = super(UserRegisterSerializer, self).create(validated_data=validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def validate_code(self, code):
        code_record = cache.get(f"code:{self.initial_data['email']}:{code}")
        if code_record != 1:
            raise ValidationError("验证码已过期或不存在")

    def validate(self, attrs):
        if attrs["password"] != attrs["password_confirm"]:
            raise ValidationError("两次输入的密码不一致")
        attrs["username"] = attrs["email"]
        del attrs["code"]
        del attrs["password_confirm"]
        return attrs


class CodeSerializer(Serializer):
    email = EmailField(validators=[UniqueValidator(queryset=User.objects.all(), message="邮箱已被注册")])

    def validate_email(self, email):
        if cache.get(f"email:{email}") == 1:
            raise ValidationError("请60s后再发送")

        return email


class UserLoginSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        data['id'] = self.user.id
        data['is_enterprise'] = self.user.is_enterprise
        data['is_admin'] = self.user.is_superuser
        if self.user.is_enterprise:
            enterprise = Enterprise.objects.filter(user=self.user)
            if enterprise:
                data['enterprise_id'] = enterprise[0].id
        else:
            data['enterprise_id'] = 0

        return data


class EnterpriseRegisterSerializer(Serializer):
    id = IntegerField(read_only=True)
    code = CharField(max_length=5, min_length=5, required=True, write_only=True)
    email = EmailField(validators=[UniqueValidator(queryset=User.objects.all(), message="邮箱已被注册")])
    password = CharField(style={'input_type': 'password'}, write_only=True)
    password_confirm = CharField(style={'input_type': 'password'}, write_only=True)
    license = ImageField(write_only=True)

    class Meta:
        model = User
        fields = ['id', "email", "code", "password", "password_confirm", "license"]

    def create(self, validated_data):
        # 继承Serializer，无需删除license
        user = User.objects.create(
            email=validated_data['email'],
            password=validated_data['password'],
            is_active=False,
            username=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        # 创建申请记录
        EnterpriseRegisterRecord.objects.create(user=user, license=validated_data['license'])

        return user

    def validate_code(self, code):
        code_record = cache.get(f"code:{self.initial_data['email']}:{code}")
        if code_record != 1:
            raise ValidationError("验证码已过期或不存在")

    def validate(self, attrs):
        if attrs["password"] != attrs["password_confirm"]:
            raise ValidationError("两次输入的密码不一致")
        attrs["username"] = attrs["email"]
        del attrs["code"]
        del attrs["password_confirm"]

        return attrs


class EnterpriseRegisterRecordSerializer(ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = EnterpriseRegisterRecord
        fields = "__all__"


class EnterpriseRegisterRecordUpdateSerializer(ModelSerializer):
    class Meta:
        model = EnterpriseRegisterRecord
        fields = ['status']
