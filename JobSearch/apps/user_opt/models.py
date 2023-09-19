from django.db.models import *
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from user.models import User
from position.models import Position
from common.models import BaseModel


class History(BaseModel):
    user = ForeignKey(User, verbose_name="用户", on_delete=DO_NOTHING)
    content_type = ForeignKey(ContentType, on_delete=DO_NOTHING)
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return self.user.username+str(self.content_type)+str(self.object_id)

    class Meta:
        verbose_name = "浏览历史"
        verbose_name_plural = verbose_name


class Collection(BaseModel):
    user = ForeignKey(User, verbose_name="用户", on_delete=DO_NOTHING)
    content_type = ForeignKey(ContentType, on_delete=DO_NOTHING)
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return self.user.username+str(self.content_type)+str(self.object_id)

    class Meta:
        verbose_name = "收藏"
        verbose_name_plural = verbose_name


class Comment(BaseModel):
    user = ForeignKey(User, verbose_name="用户", on_delete=CASCADE, related_name="user_user")
    reply_to = ForeignKey(User, null=True, blank=True, verbose_name="回复给", on_delete=DO_NOTHING, related_name="reply_to_user")
    content = TextField(verbose_name="内容")
    parent = ForeignKey("self", null=True, blank=True, related_name="parent_comment", verbose_name="父节点", on_delete=DO_NOTHING)
    root = ForeignKey("self", null=True, blank=True, related_name="root_comment", verbose_name="根节点", on_delete=CASCADE)
    content_type = ForeignKey(ContentType, on_delete=DO_NOTHING, null=True)
    object_id = PositiveIntegerField(null=True)
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return str(self.id)+self.content
    
    class Meta:
        verbose_name = "评论"
        verbose_name_plural = verbose_name


class Consult(BaseModel):
    sender = ForeignKey(User, on_delete=DO_NOTHING, related_name="consult_sender")
    receiver = ForeignKey(User, on_delete=DO_NOTHING, related_name="consult_receiver")
    content = TextField(verbose_name="内容")
    parent = ForeignKey("self", null=True, verbose_name="父节点", on_delete=DO_NOTHING)
    position = ForeignKey(Position, on_delete=DO_NOTHING)
    status = CharField(max_length=10, choices=(
        ("未读", "未读"),
        ("已读", "已读"),
        ("已回复", "已回复"),
    ), default="未读")
