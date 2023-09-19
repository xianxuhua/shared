from rest_framework.serializers import *
from rest_framework.validators import UniqueTogetherValidator
from .models import Collection, History, Comment, Consult
from position.models import Position
from enterprise.models import Lecture
from community.models import Post
from user.models import User


class _GenericField(RelatedField):
    def to_representation(self, value):
        if isinstance(value, Position):
            serializer = _PositionSerializer(value)
        elif isinstance(value, Lecture):
            serializer = _LectureSerializer(value)
        else:
            raise ValidationError("不能对该对象进行添加操作")

        return serializer.data


class _PositionSerializer(ModelSerializer):
    name = SerializerMethodField()

    class Meta:
        model = Position
        fields = ["id", "name"]

    def get_name(self, position):
        return position.name


class _LectureSerializer(ModelSerializer):
    name = SerializerMethodField()

    class Meta:
        model = Lecture
        fields = ["id", "name"]

    def get_name(self, lecture):
        return f"{lecture.enterprise.name}.{lecture.school}宣讲会"


class HistorySerializer(ModelSerializer):
    obj = _GenericField(source='content_object', read_only=True)

    class Meta:
        model = History
        fields = ["id", "obj", "add_time", "content_type"]


class HistoryCreateSerializer(ModelSerializer):
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = History
        fields = ["user", "content_type", "object_id"]
        validators = [
            UniqueTogetherValidator(
                queryset=History.objects.all(),
                fields=['user', 'content_type', 'object_id'],
                message="已经添加过该历史记录"
            )
        ]

    def validate(self, attrs):
        content_type = attrs['content_type']
        object_id = attrs['object_id']
        if content_type.app_label == "enterprise":
            if not Lecture.objects.filter(id=object_id).count():
                raise ValidationError("宣讲会不存在")
        elif content_type.app_label == "position":
            if not Position.objects.filter(id=object_id).count():
                raise ValidationError("职位不存在")
        else:
            raise ValidationError("不能添加历史记录")

        return attrs


class CollectionSerializer(ModelSerializer):
    obj = _GenericField(source='content_object', read_only=True)

    class Meta:
        model = Collection
        fields = ["id", "obj", "add_time", "content_type"]


class CollectionCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Collection
        fields = ["id", "user", "content_type", "object_id"]
        validators = [
            UniqueTogetherValidator(
                queryset=Collection.objects.all(),
                fields=['user', 'content_type', 'object_id'],
                message="已经收藏过"
            )
        ]

    def validate(self, attrs):
        content_type = attrs['content_type']
        object_id = attrs['object_id']
        if content_type.app_label == "enterprise":
            if not Lecture.objects.filter(id=object_id).count():
                raise ValidationError("宣讲会不存在")
        elif content_type.app_label == "position":
            if not Position.objects.filter(id=object_id).count():
                raise ValidationError("职位不存在")
        else:
            raise ValidationError("不能收藏")

        return attrs


class _UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "head_img", "email"]


class CommentDetailSerializer(ModelSerializer):
    user = _UserSerializer()

    class Meta:
        model = Comment
        fields = ["id", "content", "user"]


class CommentListSerializer(ModelSerializer):
    user = _UserSerializer()
    reply_to = _UserSerializer(allow_null=True)
    parent = CommentDetailSerializer()

    class Meta:
        model = Comment
        fields = "__all__"


class MyHiddenField(HiddenField):
    def __init__(self, **kwargs):
        assert 'default' in kwargs, 'default is a required argument.'
        Field.__init__(self, **kwargs)

    def to_representation(self, value):
        # 自定义hiddenField返回
        serializer = _UserSerializer(value)
        return serializer.data


class CommentCreateSerializer(ModelSerializer):
    user = MyHiddenField(default=CurrentUserDefault())
    # 通过提交id创建
    reply_to = PrimaryKeyRelatedField(allow_null=True, queryset=User.objects.all())
    add_time = DateTimeField(read_only=True)
    parent = PrimaryKeyRelatedField(allow_null=True, queryset=Comment.objects.all())
    root = PrimaryKeyRelatedField(allow_null=True, queryset=Comment.objects.all())

    def validate(self, attrs):
        parent = attrs['parent']
        root = attrs['root']
        content_type = attrs['content_type']
        object_id = attrs['object_id']
        reply_to = attrs['reply_to']
        if content_type.app_label == "community":
            if content_type.model == "post":
                if not Post.objects.filter(id=object_id).count():
                    raise ValidationError("帖子不存在")
            else:
                raise ValidationError("不能添加评论")
        elif content_type.app_label == "position":
            if content_type.model == "position":
                if not Position.objects.filter(id=object_id).count():
                    raise ValidationError("不能添加评论")
            else:
                raise ValidationError("不能添加评论")
        else:
            raise ValidationError("不能添加评论")

        if (not root and parent) or (not parent and root):
            raise ValidationError("parent和root不能只有一个")

        if root and root.parent:
            raise ValidationError("请提供正确的root节点")

        if not reply_to and parent:
            raise ValidationError("请填写回复给谁")

        return attrs

    class Meta:
        model = Comment
        fields = ["id", "user", "content", "parent", "root", "content_type", "object_id", "reply_to", "add_time"]


class _ConsultParentSerializer(ModelSerializer):
    class Meta:
        model = Consult
        fields = ['id', 'content']


class ConsultSerializer(ModelSerializer):
    receiver = _UserSerializer()
    sender = _UserSerializer()
    position = _PositionSerializer()
    parent = _ConsultParentSerializer()

    class Meta:
        model = Consult
        fields = "__all__"


class ConsultCreateSerializer(ModelSerializer):
    sender = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Consult
        fields = ['sender', 'receiver', 'content', 'parent', 'position']
