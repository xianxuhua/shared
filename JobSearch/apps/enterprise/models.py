from datetime import datetime
from django.db.models import *
from common.models import BaseModel
from user.models import User


class Enterprise(BaseModel):
    user = ForeignKey(User, verbose_name="企业管理员", on_delete=CASCADE)
    name = CharField(max_length=20, verbose_name="名称")
    head_img = ImageField(upload_to="enterprise/head_img/", verbose_name="头像")
    field = CharField(max_length=30, verbose_name="行业领域")
    worker_num = IntegerField(verbose_name="员工数")
    address = CharField(max_length=200, verbose_name="地址", null=True)
    desc = TextField(verbose_name="简介")
    finance = CharField(max_length=10, choices=(
        ("未融资", "未融资"), ("天使轮", "天使轮"), ("A轮", "A轮"),
        ("B轮", "B轮"), ("C轮", "C轮"), ("D轮", "D轮"), ("上市企业", "上市企业")), default="未融资", verbose_name="融资阶段")
    contact = CharField(max_length=11, verbose_name="联系方式")
    slogan = CharField(max_length=50, verbose_name="口号", null=True, blank=True)
    link = CharField(max_length=200, null=True, verbose_name="官网链接")
    license = ImageField(verbose_name="企业证明", null=True, upload_to="enterprise/license")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "企业"
        verbose_name_plural = verbose_name


class Fair(BaseModel):
    creator = ForeignKey(User, on_delete=DO_NOTHING)
    date = DateField(default=datetime.now)
    start_time = TimeField()
    end_time = TimeField()
    school = CharField(max_length=20, verbose_name="举办学校")
    address = CharField(max_length=20, verbose_name="具体地点")
    desc = TextField()

    def __str__(self):
        return self.school

    class Meta:
        verbose_name = "招聘会"
        verbose_name_plural = verbose_name


class Lecture(BaseModel):
    enterprise = ForeignKey(Enterprise, on_delete=DO_NOTHING)
    date = DateField(default=datetime.now, null=True)
    start_time = TimeField(null=True)
    end_time = TimeField(null=True)
    school = CharField(max_length=20, verbose_name="举办学校", null=True)
    address = CharField(max_length=20, verbose_name="具体地点", null=True)
    desc = TextField()

    def __str__(self):
        return self.enterprise.name+"."+self.school

    class Meta:
        verbose_name = "宣讲会"
        verbose_name_plural = verbose_name


class EnterpriseFair(BaseModel):
    enterprise = ForeignKey(Enterprise, on_delete=DO_NOTHING)
    fair = ForeignKey(Fair, on_delete=DO_NOTHING)
