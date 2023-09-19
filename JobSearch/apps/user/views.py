import random
from django.apps import apps
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import mixins, viewsets, response, status, permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.authentication import SessionAuthentication
from django.core.cache import cache
from .serializers import UserSerializer, UserRegisterSerializer, UserUpdateSerializer, CodeSerializer, \
                            UserLoginSerializer, EnterpriseRegisterSerializer, EnterpriseRegisterRecordSerializer, EnterpriseRegisterRecordUpdateSerializer
from .models import User, EnterpriseRegisterRecord
from common.aliyun import ALiYunEmail


_Enterprise = apps.get_model("enterprise.Enterprise")


class UserView(viewsets.ModelViewSet):
    '''
    用户
    retrieve: 查看当前用户信息
    create: 用户注册
    update: 修改密码
    list: 管理员查看
    destroy: 管理员删除用户
    '''
    queryset = User.objects.filter(is_delete=False, is_superuser=False)
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["is_enterprise"]

    def get_serializer_class(self):
        if self.action == "create":
            return UserRegisterSerializer
        elif self.action in ["update", "partial_update"]:
            return UserUpdateSerializer
        return UserSerializer

    def get_permissions(self):
        if self.action in ["retrieve", "update", "partial"]:
            return [permissions.IsAuthenticated()]
        elif self.action in ["list", "destroy"]:
            return [permissions.IsAuthenticated(), permissions.IsAdminUser()]
        return []


class CodeView(viewsets.GenericViewSet, mixins.CreateModelMixin):
    """
    验证码
    create: 发送验证码
    """
    serializer_class = CodeSerializer

    def gen_random_code(self) -> str:
        seeds = "1234567890"
        res = ""
        for i in range(5):
            res += random.choice(seeds)

        return res

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        aliyun = ALiYunEmail()
        code = self.gen_random_code()
        res = aliyun.send_mail(email, "求职网注册验证码", f"您的验证码为{code}, (5分钟内有效，若非本人操作，请忽略)")

        cache.set(f"email:{email}", 1, timeout=60)
        cache.set(f"code:{email}:{code}", 1, timeout=60*5)

        if 200 <= res.status_code < 400:
            return response.Response({"message": "发送成功"}, status=status.HTTP_200_OK)
        else:
            return response.Response({"message": "发送失败"}, status=res.status_code)


class UserLoginView(TokenObtainPairView):
    serializer_class = UserLoginSerializer


class EnterpriseRegisterView(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = EnterpriseRegisterRecord.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_serializer_class(self):
        if self.action == "create":
            return EnterpriseRegisterSerializer
        if self.action in ['update', 'partial_update']:
            return EnterpriseRegisterRecordUpdateSerializer
        return EnterpriseRegisterRecordSerializer

    def get_permissions(self):
        if self.action in ['list', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), permissions.IsAdminUser()]
        return []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # 给管理员发消息
        aliyun = ALiYunEmail()
        user = User.objects.get(is_superuser=True)
        res = aliyun.send_mail(user.email, "注册企业账号申请", f"{serializer.data['email']}请求注册企业账号")

        headers = self.get_success_headers(serializer.data)
        if 200 <= res.status_code < 400:
            return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return response.Response({"message": "服务器出错"}, status=res.status_code)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if serializer.data['status'] == "已通过":
            # 修改用户状态为激活，创建对应企业
            user = User.objects.get(id=instance.user.id)
            user.is_active = True
            user.is_enterprise = True
            user.save()

            _Enterprise.objects.create(user=user, name='', head_img='', field='', worker_num=0, address='', desc='',
                                       finance='', contact='', slogan='', license=instance.license)

            # 发送邮件
            aliyun = ALiYunEmail()
            res = aliyun.send_mail(user.email, "企业账号审核通知", "您的账号已审核通过，请登陆完善信息")
            if 200 <= res.status_code < 400:
                return response.Response(serializer.data)
            else:
                return response.Response({"message": "服务器出错"}, status=res.status_code)
        else:
            user = User.objects.get(id=instance.user.id)
            user.is_active = False
            user.is_enterprise = False
            user.save()

            # 发送邮件
            aliyun = ALiYunEmail()
            res = aliyun.send_mail(user.email, "企业账号审核通知", "您的账号审核未通过，请提供正确的营业执照")
            if 200 <= res.status_code < 400:
                return response.Response(serializer.data)
            else:
                return response.Response({"message": "服务器出错"}, status=res.status_code)
