from django.apps import apps
from django.contrib.auth.models import AnonymousUser
from django.contrib.contenttypes.models import ContentType

from rest_framework.serializers import *
from .models import School, Profession, Post, CommunityEnterPrise, PostLike


_User = apps.get_model("user.User")


class _UserSerializer(ModelSerializer):
    class Meta:
        model = _User
        fields = ["id", "username", "head_img"]


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class PostDetailSerializer(ModelSerializer):
    user = _UserSerializer()
    like = SerializerMethodField()

    # 若用户登陆查询当前用户是否点赞过
    def get_like(self, post):
        current_user = self.context['request'].user
        if not isinstance(current_user, AnonymousUser):
            c = PostLike.objects.filter(user=current_user, post=post)
            if c.count():
                return _PostLikeDetailSerializer(c[0]).data

        return None

    class Meta:
        model = Post
        fields = "__all__"


class PostCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    add_time = DateTimeField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())
    like_num = IntegerField(read_only=True)
    view_num = IntegerField(read_only=True)
    comment_num = IntegerField(read_only=True)

    class Meta:
        model = Post
        fields = ["id", "user", "category", "content_type", "object_id",
                  "title", "content", "add_time", "like_num", "view_num", "comment_num"]

    def validate(self, attrs):
        content_type = attrs['content_type']
        if content_type is None:
            # 不添加帖子发送对象
            attrs['object_id'] = 0
            return attrs

        object_id = attrs['object_id']
        if content_type.app_label == "community":
            if content_type.model == "school":
                if not School.objects.filter(id=object_id).count():
                    raise ValidationError("学校不存在")
            elif content_type.model == "profession":
                if not Profession.objects.filter(id=object_id).count():
                    raise ValidationError("专业不存在")
            elif content_type.model == "communityenterprise":
                if not CommunityEnterPrise.objects.filter(id=object_id).count():
                    raise ValidationError("企业不存在")
            else:
                raise ValidationError("不能创建帖子")
        else:
            raise ValidationError("不能创建帖子")
        return attrs


class _PostLikeDetailSerializer(ModelSerializer):
    class Meta:
        model = PostLike
        fields = ["id"]


class PostLikeCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = PostLike
        fields = ["id", "user", "post"]


class ProfessionSerializer(ModelSerializer):
    member_num = SerializerMethodField()
    post_num = SerializerMethodField()

    class Meta:
        model = Profession
        fields = "__all__"

    def get_member_num(self, profession):
        profession_table = ContentType.objects.filter(app_label="community", model="profession").first()
        return Post.objects.filter(content_type=profession_table, object_id=profession.id).values("user_id")\
            .distinct().count()

    def get_post_num(self, profession):
        profession_table = ContentType.objects.filter(app_label="community", model="profession").first()
        return Post.objects.filter(content_type=profession_table, object_id=profession.id).count()


class ProfessionDetailSerializer(ModelSerializer):
    class Meta:
        model = Profession
        fields = "__all__"


class ProfessionCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    add_time = DateTimeField(read_only=True)
    member_num = SerializerMethodField(read_only=True)
    post_num = SerializerMethodField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Profession
        fields = ['id', 'add_time', 'user', 'school', 'name', 'member_num', 'post_num']

    def get_member_num(self, profession):
        profession_table = ContentType.objects.filter(app_label="community", model="profession").first()
        return Post.objects.filter(content_type=profession_table, object_id=profession.id).values("user_id")\
            .distinct().count()

    def get_post_num(self, profession):
        profession_table = ContentType.objects.filter(app_label="community", model="profession").first()
        return Post.objects.filter(content_type=profession_table, object_id=profession.id).count()


class SchoolListSerializer(ModelSerializer):
    post_num = SerializerMethodField()
    member_num = SerializerMethodField()
    profession_num = SerializerMethodField()

    class Meta:
        model = School
        fields = "__all__"

    def get_post_num(self, school):
        # f"select * from community_post where content_type_id=18 and object_id in (select id from community_profession
        # where school_id={school.id})")
        profession_table = ContentType.objects.filter(app_label="community", model="profession").first()
        return Post.objects.filter(content_type=profession_table, object_id__in=Profession.objects.filter(
            school=school.id).values("id")).count()

    def get_member_num(self, school):
        # 获取在该学校发送帖子的用户数
        # select count(distinct user_id) from community_post where content_type_id=18 and object_id in (select id from
        # community_profession where school_id=1);
        profession_table = ContentType.objects.filter(app_label="community", model="profession").first()
        return Post.objects.filter(content_type=profession_table, object_id__in=Profession.objects.filter(
            school=school.id).values("id")).values("user_id").distinct().count()

    def get_profession_num(self, school):
        return Profession.objects.filter(school_id=school.id).count()


class SchoolDetailSerializer(ModelSerializer):
    class Meta:
        model = School
        fields = ["id", "head_img", "name", "desc"]


class SchoolCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    add_time = DateTimeField(read_only=True)
    post_num = IntegerField(read_only=True, default=0)
    member_num = IntegerField(read_only=True, default=0)
    profession_num = IntegerField(read_only=True, default=0)
    desc = CharField(allow_blank=True)
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = School
        fields = ["id", "name", "user", "desc", "head_img", "add_time", "profession_num", "post_num", "member_num"]

    def validate(self, attrs):
        if School.objects.filter(name=attrs['name']).count():
            raise ValidationError("已经创建过")
        return attrs


class EnterpriseSerializer(ModelSerializer):
    post_num = SerializerMethodField()
    member_num = SerializerMethodField()

    class Meta:
        model = CommunityEnterPrise
        fields = "__all__"

    def get_post_num(self, enterprise):
        enterprise_table = ContentType.objects.filter(app_label="community", model="enterprise").first()
        return Post.objects.filter(content_type=enterprise_table, object_id=enterprise.id).count()

    def get_member_num(self, enterprise):
        # 获取在该学校发送帖子的用户数
        enterprise_table = ContentType.objects.filter(app_label="community", model="enterprise").first()
        return Post.objects.filter(content_type=enterprise_table, object_id=enterprise.id).values("user").\
            distinct().count()


class EnterpriseCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    add_time = DateTimeField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())
    desc = CharField(allow_null=True, allow_blank=True)
    post_num = SerializerMethodField()
    member_num = SerializerMethodField()

    class Meta:
        model = CommunityEnterPrise
        fields = ['id', 'add_time', 'user', 'name', 'desc', 'head_img', 'post_num', 'member_num']

    def get_post_num(self, enterprise):
        enterprise_table = ContentType.objects.filter(app_label="community", model="enterprise").first()
        return Post.objects.filter(content_type=enterprise_table, object_id=enterprise.id).count()

    def get_member_num(self, enterprise):
        # 获取在该学校发送帖子的用户数
        enterprise_table = ContentType.objects.filter(app_label="community", model="enterprise").first()
        return Post.objects.filter(content_type=enterprise_table, object_id=enterprise.id).values("user").\
            distinct().count()
