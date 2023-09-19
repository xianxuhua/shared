from datetime import datetime
from django.db.models import *


class MyManager(Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_delete=False).order_by("-add_time")


class BaseModel(Model):
    objects = MyManager()
    add_time = DateTimeField(default=datetime.now, verbose_name="添加时间")
    is_delete = BooleanField(default=False, verbose_name="是否删除")

    class Meta:
        abstract = True

    def delete(self, *args, **kwargs):
        self.is_delete = True
        return super().save(*args, **kwargs)
