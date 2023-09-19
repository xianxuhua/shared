from rest_framework import viewsets, mixins, permissions, response, status, filters
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import SessionAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from common.permissions import IsOwnerOrReadOnly, IsMessageOwnerOrReadOnly
from .models import Collection, History, Comment, Consult
from .serializers import CollectionSerializer, CollectionCreateSerializer, \
    HistorySerializer, HistoryCreateSerializer, CommentCreateSerializer, CommentListSerializer, _UserSerializer,\
    CommentDetailSerializer, ConsultSerializer, ConsultCreateSerializer
from user.models import User


class HistoryView(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.DestroyModelMixin, mixins.ListModelMixin):
    """
    历史记录
    list: 历史记录列表
    create: 添加历史记录
    destroy: 删除历史记录
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_queryset(self):
        return History.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.action == "create":
            return HistoryCreateSerializer
        return HistorySerializer


class CollectionView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    """
    收藏
    list: 收藏列表
    create: 添加收藏
    destroy: 取消收藏
    """
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_queryset(self):
        return Collection.objects.filter(user=self.request.user)

    def get_serializer_class(self):
        if self.action == "create":
            return CollectionCreateSerializer
        return CollectionSerializer


class CommentView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.DestroyModelMixin, mixins.RetrieveModelMixin):
    """
    职位评论
    list: 评论列表
    create: 创建评论
    destory: 删除评论
    """
    queryset = Comment.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["content_type", "object_id", "root"]

    def get_serializer_class(self):
        if self.action in ["create", "destroy"]:
            return CommentCreateSerializer
        
        return CommentListSerializer

    def get_permissions(self):
        if self.action in ["create", "destroy"]:
            return [permissions.IsAuthenticated(), IsOwnerOrReadOnly()]
        
        return []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        # 重写返回值
        re_dict = serializer.data
        if re_dict['reply_to']:
            re_dict['reply_to'] = _UserSerializer(User.objects.get(id=re_dict['reply_to'])).data
        if re_dict['parent']:
            re_dict['parent'] = CommentDetailSerializer(Comment.objects.get(id=re_dict['parent'])).data
        return response.Response(re_dict, status=status.HTTP_201_CREATED, headers=headers)


class ConsultView(viewsets.ModelViewSet):
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [permissions.IsAuthenticated, IsMessageOwnerOrReadOnly]

    def get_queryset(self):
        return Consult.objects.filter(receiver=self.request.user)

    def get_serializer_class(self):
        if self.action == "create":
            return ConsultCreateSerializer
        return ConsultSerializer
