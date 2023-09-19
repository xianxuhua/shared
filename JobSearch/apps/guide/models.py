from django.db.models import *
from common.models import BaseModel


class Guide(BaseModel):
    category = CharField(choices=(("简历指导", "简历指导"),
                                  ("就业协议", "就业协议"),
                                  ("户口档案", "户口档案"),
                                  ("职业规划", "职业规划")), max_length=20, verbose_name="分类")
    title = CharField(max_length=100, verbose_name="标题")
    content = TextField(verbose_name="内容")

    class Meta:
        verbose_name = "就业指导"
        verbose_name_plural = verbose_name
