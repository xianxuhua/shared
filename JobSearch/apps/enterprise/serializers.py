from django.apps import apps
from django.contrib.auth.models import AnonymousUser
from django.contrib.contenttypes.models import ContentType
from rest_framework.serializers import *
from .models import Enterprise, Lecture, Fair, EnterpriseFair
from user_opt.models import Collection


_Position = apps.get_model("position.Position")


class EnterpriseListSerializer(ModelSerializer):
    class Meta:
        model = Enterprise
        fields = ["id", "finance", "name", "head_img", "field", "worker_num", "add_time", "desc", "contact", "slogan",
                  'address']


class _CollectionSerializer(ModelSerializer):
    class Meta:
        model = Collection
        fields = ["id"]


class _PositionSerializer(ModelSerializer):
    class Meta:
        model = _Position
        fields = ["id", "name", "add_time"]


class EnterpriseDetailSerializer(ModelSerializer):
    class Meta:
        model = Enterprise
        fields = ["id", "finance", "add_time", "name", "head_img", "field", "worker_num", "address", "desc", "contact",
                  "slogan", "license"]


class EnterpriseCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())
    contact = CharField(min_length=11, max_length=11)

    class Meta:
        model = Enterprise
        fields = ["id", "user", "name", "head_img", "field", "worker_num", "address", "desc", "finance", "contact"]

    def validate_user(self, user):
        if not user.is_enterprise:
            raise ValidationError("非企业用户")
        # HiddenField，UniqueValidator这里似乎不行
        if Enterprise.objects.filter(user=user).count():
            raise ValidationError("您已创建过企业")

        return user


class EnterpriseUpdateSerializer(ModelSerializer):
    class Meta:
        model = Enterprise
        fields = ["id", "name", "head_img", "field", "worker_num", "address", "desc", "finance", "contact", "slogan"]
    # 这里不需要判断是否是企业用户，view里要求登录且登录用户为企业的用户


class FairSerializer(ModelSerializer):
    class Meta:
        model = Fair
        fields = "__all__"


class FairCreateSerializer(ModelSerializer):
    creator = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Fair
        fields = ['creator', 'date', 'start_time', 'end_time', 'school', 'address', 'desc']


class LectureCreateSerializer(ModelSerializer):
    enterprise = PrimaryKeyRelatedField(queryset=Enterprise.objects.all())

    class Meta:
        model = Lecture
        fields = "__all__"


class LectureSerializer(ModelSerializer):
    enterprise = EnterpriseListSerializer()

    class Meta:
        model = Lecture
        fields = "__all__"


class LectureUpdateSerializer(ModelSerializer):
    class Meta:
        model = Lecture
        fields = "__all__"


class LectureDetailSerializer(ModelSerializer):
    enterprise = EnterpriseListSerializer()
    collection = SerializerMethodField()

    class Meta:
        model = Lecture
        fields = "__all__"

    def get_collection(self, lecture):
        current_user = self.context['request'].user
        lecture_table = ContentType.objects.filter(app_label='enterprise', model='lecture').first()
        if not isinstance(current_user, AnonymousUser):
            c = Collection.objects.filter(user=current_user, content_type=lecture_table, object_id=lecture.id)
            if c.count():
                return _CollectionSerializer(c[0]).data

        return None


class EnterpriseFairSerializer(ModelSerializer):
    enterprise = EnterpriseListSerializer()
    fair = FairSerializer()

    class Meta:
        model = EnterpriseFair
        fields = ['id', 'enterprise', 'fair']


class EnterpriseFairCreateSerializer(ModelSerializer):
    class Meta:
        model = EnterpriseFair
        fields = ['enterprise', 'fair']
