from datetime import datetime
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import AnonymousUser
from django.apps import apps
from rest_framework import mixins, viewsets, permissions, filters, response, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from django_filters.rest_framework import DjangoFilterBackend

from .serializers import EnterpriseListSerializer, EnterpriseDetailSerializer, EnterpriseCreateSerializer, \
    EnterpriseUpdateSerializer, LectureCreateSerializer, LectureSerializer, LectureDetailSerializer, FairSerializer, \
    FairCreateSerializer, EnterpriseFairSerializer, EnterpriseFairCreateSerializer, LectureUpdateSerializer
from .models import Enterprise, Lecture, Fair, EnterpriseFair
from .filters import EnterpriseFilter, LectureFilter
from common.permissions import IsOwnerOrReadOnly, IsEnterpriseOwnerOrReadOnly, IsEnterpriseUser
from user_opt.models import History


_Position = apps.get_model("position.Position")


class EnterpriseView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin,
                     mixins.UpdateModelMixin):
    """
    企业
    list: 查看所有企业
    retrieve: 查看企业详情
    create: 创建企业
    update: 更新企业
    """
    queryset = Enterprise.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = EnterpriseFilter

    def get_permissions(self):
        if self.action in ["create", "update", "partial_update"]:
            return [permissions.IsAuthenticated(), IsOwnerOrReadOnly()]
        return []

    def get_serializer_class(self):
        if self.action == "create":
            return EnterpriseCreateSerializer
        elif self.action in ["update", "partial_update"]:
            return EnterpriseUpdateSerializer
        elif self.action == "retrieve":
            return EnterpriseDetailSerializer

        return EnterpriseListSerializer


class FairView(viewsets.ModelViewSet):
    queryset = Fair.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["creator", "date"]
    search_fields = ['school']

    def get_serializer_class(self):
        if self.action == "create":
            return FairCreateSerializer
        return FairSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return []
        return [permissions.IsAuthenticated(), permissions.IsAdminUser()]


class LectureView(viewsets.ModelViewSet):
    serializer_class = LectureSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_class = LectureFilter
    search_fields = ['school']

    def get_queryset(self):
        if not isinstance(self.request.user, AnonymousUser) and self.request.user.is_enterprise:
            return Lecture.objects.filter(enterprise__user=self.request.user)

        return Lecture.objects.all()

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return []
        return [permissions.IsAuthenticated(), IsEnterpriseOwnerOrReadOnly()]

    def get_serializer_class(self):
        if self.action == "create":
            return LectureCreateSerializer
        elif self.action == "retrieve":
            return LectureDetailSerializer
        if self.action in ['update', 'partial_update']:
            return LectureUpdateSerializer
        return LectureSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        # 添加浏览历史
        # 添加历史记录
        lecture_table = ContentType.objects.filter(app_label="enterprise", model="lecture").first()
        current_user = self.request.user
        if not isinstance(current_user, AnonymousUser):
            history = History.objects.filter(user=current_user, content_type=lecture_table, object_id=instance.id)
            if not history.count():
                History.objects.create(user=current_user, content_type=lecture_table, object_id=instance.id)
            else:
                history.update(add_time=datetime.now())
        return response.Response(serializer.data)


class EnterpriseFairView(viewsets.ModelViewSet):
    queryset = EnterpriseFair.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["enterprise", "fair"]

    def get_serializer_class(self):
        if self.action == "create":
            return EnterpriseFairCreateSerializer
        return EnterpriseFairSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return []
        return [permissions.IsAuthenticated(), IsEnterpriseUser()]
