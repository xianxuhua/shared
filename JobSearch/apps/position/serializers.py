from django.contrib.auth.models import AnonymousUser
from django.contrib.contenttypes.models import ContentType
from django.apps import apps
from rest_framework.serializers import *
from rest_framework.validators import ValidationError

from .models import Position
from user_opt.models import Collection
from user.models import User

# 避免循环引用
_EnterPrise = apps.get_model("enterprise.EnterPrise")
_Lecture = apps.get_model("enterprise.Lecture")


class _EnterPriseWithPositionListSerializer(ModelSerializer):
    class Meta:
        model = _EnterPrise
        fields = ["id", "name", "field", "worker_num", "finance", "slogan", "head_img"]


class _UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email']


class _EnterPriseWithPositionDetailSerializer(ModelSerializer):
    collection = SerializerMethodField()
    user = _UserSerializer()

    class Meta:
        model = _EnterPrise
        fields = ["id", "user", "name", "head_img", "field", "worker_num", "address", "finance", "slogan", "collection", "link"]

    def get_collection(self, enterprise):
        current_user = self.context['request'].user
        enterprise_table = ContentType.objects.filter(app_label='enterprise', model='enterprise').first()
        if not isinstance(current_user, AnonymousUser):
            c = Collection.objects.filter(user=current_user, content_type=enterprise_table, object_id=enterprise.id)
            if c.count():
                return _CollectionSerializer(c[0]).data

        return None


class _CollectionSerializer(ModelSerializer):
    class Meta:
        model = Collection
        fields = ["id"]


class _LectureSerializer(ModelSerializer):
    class Meta:
        model = _Lecture
        fields = ['id', 'school']


class PositionDetailSerializer(ModelSerializer):
    collection = SerializerMethodField()
    enterprise = _EnterPriseWithPositionDetailSerializer()

    class Meta:
        model = Position
        fields = "__all__"

    # 职位详情页获取收藏信息
    def get_collection(self, position):
        current_user = self.context['request'].user
        position_table = ContentType.objects.filter(app_label='position', model='position').first()
        if not isinstance(current_user, AnonymousUser):
            c = Collection.objects.filter(user=current_user, content_type=position_table, object_id=position.id)
            if c.count():
                return _CollectionSerializer(c[0]).data

        return None


class PositionListSerializer(ModelSerializer):
    enterprise = _EnterPriseWithPositionListSerializer()

    class Meta:
        model = Position
        fields = "__all__"


# 获取当前企业
class _CurrentEnterpriseDefault:
    requires_context = True

    def __call__(self, serializer_field):
        if not serializer_field.context['request'].user.is_enterprise:
            raise ValidationError("非企业用户")

        e = _EnterPrise.objects.filter(user=serializer_field.context['request'].user)
        if e.count():
            return e[0]

        raise ValidationError("企业不存在")


class PositionCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    enterprise = HiddenField(default=_CurrentEnterpriseDefault())
    add_time = DateTimeField(read_only=True)
    lecture = PrimaryKeyRelatedField(required=False, allow_null=True, queryset=_Lecture.objects.all())

    class Meta:
        model = Position
        fields = ["id", "name", "category", "min_salary", "max_salary", "edu_require", "skill_require", "desc", "num",
                  "enterprise", "add_time", "interview_times", "lecture", "tags", "work_kind", "start_date", "end_date"]

    def validate(self, attrs):
        if attrs['min_salary'] > attrs['max_salary']:
            raise ValidationError("请输入合法的薪资范围")

        return attrs


class PositionUpdateSerializer(ModelSerializer):
    add_time = DateTimeField(read_only=True)
    lecture = PrimaryKeyRelatedField(required=False, allow_null=True, queryset=_Lecture.objects.all())

    class Meta:
        model = Position
        fields = ["id", "name", "category", "min_salary", "max_salary", "edu_require", "skill_require", "desc", "num",
                  "interview_times", "lecture", "add_time", "tags", "work_kind", "start_date", "end_date"]
