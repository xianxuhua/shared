from datetime import datetime
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import AnonymousUser
from django.apps import apps
from rest_framework import viewsets, mixins, filters, permissions, response, status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from .serializers import PositionListSerializer, PositionCreateSerializer, PositionUpdateSerializer, \
                            PositionDetailSerializer
from .models import Position
from .filters import PositionFilter
from enterprise.serializers import LectureSerializer
from common.permissions import IsEnterpriseOwnerOrReadOnly, IsEnterpriseUser
from user_opt.models import History


_Lecture = apps.get_model("enterprise.Lecture")


class PositionView(viewsets.ModelViewSet):
    """
    职位
    list: 查看所有职位
    retrieve: 查看职位详情
    create: 添加职位
    update: 更新职位
    destroy: 删除职位
    """
    queryset = Position.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = PositionFilter
    ordering_fields = ['add_time']

    def get_serializer_class(self):
        if self.action == "create":
            return PositionCreateSerializer
        elif self.action in ["update", "partial_update"]:
            return PositionUpdateSerializer
        elif self.action == "retrieve":
            return PositionDetailSerializer

        return PositionListSerializer

    def get_permissions(self):
        if self.action in ["create", "update", "destroy", "partial_update"]:
            return [permissions.IsAuthenticated(), IsEnterpriseOwnerOrReadOnly()]
        return []

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)

        # 添加历史记录
        position_table = ContentType.objects.filter(app_label="position", model="position").first()
        current_user = self.request.user
        if not isinstance(current_user, AnonymousUser):
            history = History.objects.filter(user=current_user, content_type=position_table, object_id=instance.id)
            if not history.count():
                History.objects.create(user=current_user, content_type=position_table, object_id=instance.id)
            else:
                history.update(add_time=datetime.now())
        return response.Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        re_data = serializer.data
        re_data['lecture'] = LectureSerializer(_Lecture.objects.filter(id=re_data['lecture']).first()).data
        return response.Response(re_data)
