from django.db.models import *
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey

from common.models import BaseModel
from user.models import User


class School(BaseModel):
    user = ForeignKey(User, on_delete=DO_NOTHING, verbose_name="创建者", null=True)
    name = CharField(max_length=20, verbose_name="名称")
    head_img = ImageField(upload_to="school/head_img/", null=True, blank=True, verbose_name="封面")
    desc = TextField(verbose_name="简介", null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "学校"
        verbose_name_plural = verbose_name


class Profession(BaseModel):
    user = ForeignKey(User, on_delete=DO_NOTHING, verbose_name="创建者", null=True)
    school = ForeignKey(School, on_delete=CASCADE, verbose_name="学校", null=True)
    name = CharField(max_length=20, verbose_name="专业")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "专业"
        verbose_name_plural = verbose_name


class Post(BaseModel):
    user = ForeignKey(User, on_delete=DO_NOTHING, verbose_name="创建者")
    category = CharField(max_length=20, null=True)
    content_type = ForeignKey(ContentType, on_delete=DO_NOTHING, null=True)
    object_id = PositiveIntegerField(null=True)
    content_object = GenericForeignKey('content_type', 'object_id')
    title = CharField(max_length=100, verbose_name="标题")
    content = TextField(verbose_name="内容")
    like_num = IntegerField(default=0, verbose_name='点赞数')
    view_num = IntegerField(default=0, verbose_name='查看数')
    comment_num = IntegerField(default=0, verbose_name='评论数')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "帖子"
        verbose_name_plural = verbose_name


class PostLike(BaseModel):
    post = ForeignKey(Post, on_delete=DO_NOTHING)
    user = ForeignKey(User, on_delete=DO_NOTHING)

    def __str__(self):
        return self.post.title

    class Meta:
        verbose_name = "点赞记录表"
        verbose_name_plural = verbose_name


class CommunityEnterPrise(BaseModel):
    user = ForeignKey(User, on_delete=DO_NOTHING, verbose_name="创建者", null=True, related_name='creater')
    name = CharField(max_length=30, verbose_name="名称")
    head_img = ImageField(upload_to='enterprise/head_img', verbose_name="头像", null=True)
    desc = TextField(verbose_name="简介")

    class Meta:
        verbose_name = "企业"
        verbose_name_plural = verbose_name
