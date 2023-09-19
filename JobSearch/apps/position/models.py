from django.db.models import *
from common.models import BaseModel
from enterprise.models import Enterprise, Lecture


class Position(BaseModel):
    name = CharField(max_length=20, verbose_name="名称")
    enterprise = ForeignKey(Enterprise, verbose_name="企业", on_delete=CASCADE)
    lecture = ForeignKey(Lecture, verbose_name="宣讲会", on_delete=CASCADE, null=True)
    category = CharField(max_length=30, verbose_name="分类")
    min_salary = IntegerField(verbose_name="最少薪资")
    max_salary = IntegerField(verbose_name="最高薪资")
    edu_require = CharField(max_length=10, choices=(
        ("大专", "大专"), ("本科", "本科"), ("硕士", "硕士"), ("博士", "博士")
    ), verbose_name="学位需求")
    skill_require = TextField(verbose_name="技能需求")
    min_work_year = IntegerField(default=0, verbose_name="最低工作年限")
    desc = TextField(verbose_name="简介")
    num = IntegerField(verbose_name="招聘人数")
    interview_times = IntegerField(default=1, verbose_name="面试轮次")
    professions = TextField(verbose_name="招聘专业", null=True)
    work_address = TextField(verbose_name="工作地点", null=True)
    is_internship = BooleanField(default=False, verbose_name="是否实习")
    tags = JSONField(null=True, default=['五险一金'])
    work_kind = CharField(max_length=10, null=True, verbose_name="工作性质")
    start_date = DateField(null=True)
    end_date = DateField(null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "职位"
        verbose_name_plural = verbose_name
