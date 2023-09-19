from rest_framework import viewsets, mixins, permissions, response, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from .models import Resume, ResumePosition, FileResume
from position.models import Position
from .serializers import ApplyPositionSerializer, ApplyRecordSerializer, ResumeSerializer, ResumeCreateSerializer, \
                            ResumeUpdateSerializer, FileResumeCreateSerializer
from common.permissions import IsOwnerOrReadOnly, IsGiveCurrentEnterprise
from common.aliyun import ALiYunEmail


class ResumeView(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.CreateModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    """
    在线简历
    retrieve: 查看简历
    create: 创建简历
    update: 更新简历
    destory: 删除简历
    """
    queryset = Resume.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_serializer_class(self):
        if self.action == "create":
            return ResumeCreateSerializer
        elif self.action in ["update", "partial_update"]:
            return ResumeUpdateSerializer
        return ResumeSerializer


class FileResumeView(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = FileResume.objects.all()
    serializer_class = FileResumeCreateSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class ApplyPositionView(viewsets.ModelViewSet):
    """
    投递简历申请职位
    """
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_permissions(self):
        # 企业账号查看、修改、发给自己的简历记录
        if self.action in ['list', 'retrieve', 'destroy', 'update', 'partial_update']:
            return [permissions.IsAuthenticated(), IsGiveCurrentEnterprise()]
        # 求职者账号只有创建简历记录的权限
        return [permissions.IsAuthenticated()]

    def get_serializer_class(self):
        if self.action == "create":
            return ApplyPositionSerializer
        return ApplyRecordSerializer

    def get_queryset(self):
        # 如果登陆用户是企业账号，返回发给企业的申请记录
        if self.request.user.is_enterprise:
            # 原生sql导致详情页无记录
            return ResumePosition.objects.filter(position__enterprise__user=self.request.user)
        # 是求职者，返回当前用户的申请记录
        return ResumePosition.objects.filter(user=self.request.user)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        position = Position.objects.filter(id=serializer.data['position']).first()
        # 有人申请职位，给企业发送邮件
        aliyun = ALiYunEmail()
        res = aliyun.send_mail(position.enterprise.user.email, "申请职位提醒", f"{self.request.user.email}申请{position.name}，请前去处理")
        if 200 <= res.status_code < 400:
            headers = self.get_success_headers(serializer.data)
            return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return response.Response({"message": "服务器出错"}, status=res.status_code)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        # 企业更新简历状态，给求职者发邮件
        aliyun = ALiYunEmail()
        if serializer.data['status'] in ["审核通过", "未通过"]:
            res = aliyun.send_mail(instance.user.email, "简历审核提醒", f"您投递的{serializer.data['position']['name']}的简历{instance.status}")
            if 200 <= res.status_code < 400:
                return response.Response(serializer.data)
            else:
                return response.Response({"message": "服务器出错"}, status=res.status_code)

        return response.Response(serializer.data)
