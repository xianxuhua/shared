from django.db.models import *
from common.models import BaseModel
from user.models import User
from position.models import Position


class Resume(BaseModel):
    user = ForeignKey(User, verbose_name="用戶", on_delete=CASCADE)
    name = CharField(max_length=20, verbose_name="姓名")
    gender = CharField(max_length=10, choices=(("男", "男"), ("女", "女")), verbose_name="性别")
    age = IntegerField(verbose_name="年龄")
    edu = CharField(max_length=10, choices=(
        ("大专", "大专"), ("本科", "本科"), ("硕士", "硕士"), ("博士", "博士")
    ), verbose_name="学历")
    university = CharField(max_length=20, verbose_name="毕业学校")
    profession = CharField(max_length=20, verbose_name="专业")
    want = CharField(max_length=20, verbose_name="求职意向")
    desc = TextField(verbose_name="个人简介")
    contact = CharField(max_length=11, verbose_name="联系方式")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "简历"
        verbose_name_plural = verbose_name


class FileResume(BaseModel):
    user = ForeignKey(User, on_delete=CASCADE)
    file = FileField(upload_to="resume/", verbose_name="简历附件")

    class Meta:
        verbose_name = "简历附件"


class ResumePosition(BaseModel):
    user = ForeignKey(User, null=True, blank=True, verbose_name="用户", on_delete=CASCADE)
    position = ForeignKey(Position, verbose_name="职位", on_delete=DO_NOTHING)
    resume = ForeignKey(Resume, on_delete=DO_NOTHING, null=True, blank=True)
    file_resume = ForeignKey(FileResume, on_delete=DO_NOTHING, null=True, blank=True)
    status = CharField(max_length=10, choices=(("待审核", "待审核"),
                                               ("审核通过", "审核通过"),
                                               ("未通过", "未通过"),
                                               ("邀请中", "邀请中"),
                                               ("已接受面试", "已接受面试"),
                                               ("已通过", "已通过"),
                                               ("已发放offer", "已发放offer"),), default="待审核")
    category = CharField(max_length=10, choices=(("在线简历", "在线简历"), ("简历附件", "简历附件")), verbose_name="简历类型", null=True)

    def __str__(self):
        return self.position.name

    class Meta:
        verbose_name = "职位申请记录"
        verbose_name_plural = verbose_name
