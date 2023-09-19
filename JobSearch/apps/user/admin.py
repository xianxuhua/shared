from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

admin.site.register(User, UserAdmin)
# 不能使用装饰器的方式注册，不然密码无法加密
