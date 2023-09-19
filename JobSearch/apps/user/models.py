from django.db.models import *
from django.contrib.auth.models import AbstractUser
from common.models import BaseModel


class User(AbstractUser, BaseModel):
    head_img = ImageField(upload_to="user/head_img/", null=True, verbose_name="头像")
    is_enterprise = BooleanField(default=False, verbose_name="是否是企业用户")

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "用户"
        verbose_name_plural = verbose_name


class EnterpriseRegisterRecord(BaseModel):
    user = ForeignKey(User, on_delete=CASCADE)
    license = ImageField(upload_to="enterprise/license")
    status = CharField(max_length=20, verbose_name="状态", default='待处理')
