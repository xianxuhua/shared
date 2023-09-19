from django.db.models import *
from common.models import BaseModel


class Policy(BaseModel):
    address = CharField(max_length=30, verbose_name="城市")
    title = CharField(max_length=100, verbose_name="标题")
    content = TextField(verbose_name="内容")

    class Meta:
        verbose_name = "就业政策"
        verbose_name_plural = verbose_name
