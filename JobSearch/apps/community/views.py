from rest_framework import viewsets, mixins, permissions, response, status
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import SchoolCreateSerializer, SchoolDetailSerializer, SchoolListSerializer,\
    ProfessionCreateSerializer, ProfessionDetailSerializer, ProfessionSerializer, PostCreateSerializer, PostSerializer,\
    PostDetailSerializer, EnterpriseCreateSerializer, EnterpriseSerializer, PostLikeCreateSerializer
from .models import School, Profession, Post, CommunityEnterPrise, PostLike
from common.permissions import IsOwnerOrReadOnly


class SchoolView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin):
    queryset = School.objects.all()
    filter_backends = [SearchFilter]
    search_fields = ['name']
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_permissions(self):
        if self.action == "create":
            return [permissions.IsAuthenticated(), IsOwnerOrReadOnly()]
        return []

    def get_serializer_class(self):
        if self.action == "list":
            return SchoolListSerializer
        elif self.action == "create":
            return SchoolCreateSerializer
        return SchoolDetailSerializer


class ProfessionView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin):
    queryset = Profession.objects.all()
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['name']
    filterset_fields = ["school"]
    authentication_classes = [SessionAuthentication, JWTAuthentication]

    def get_permissions(self):
        if self.action == "create":
            return [permissions.IsAuthenticated(), IsOwnerOrReadOnly()]
        return []

    def get_serializer_class(self):
        if self.action == "list":
            return ProfessionSerializer
        elif self.action == "create":
            return ProfessionCreateSerializer
        return ProfessionDetailSerializer


class PostView(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by("-view_num")
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    search_fields = ['title']
    filterset_fields = ["content_type", "object_id", "category"]
    ordering_fields = ["view_num", "add_time"]
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_serializer_class(self):
        if self.action == "retrieve":
            return PostDetailSerializer
        elif self.action == "create":
            return PostCreateSerializer
        return PostSerializer

    def get_permissions(self):
        if self.action in ["create", "update", "delete", "partial_update"]:
            return [permissions.IsAuthenticated(), IsOwnerOrReadOnly()]
        return []

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.view_num += 1
        instance.save()
        serializer = self.get_serializer(instance)
        return response.Response(serializer.data)


class EnterpriseView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin):
    queryset = CommunityEnterPrise.objects.all()
    serializer_class = EnterpriseSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    search_fields = ['name']
    authentication_classes = [SessionAuthentication, JWTAuthentication]

    def get_serializer_class(self):
        if self.action == "create":
            return EnterpriseCreateSerializer
        return EnterpriseSerializer

    def get_permissions(self):
        if self.action == "create":
            return [permissions.IsAuthenticated(), IsOwnerOrReadOnly()]
        return []


class PostLikeView(viewsets.GenericViewSet, mixins.CreateModelMixin, mixins.DestroyModelMixin):
    queryset = PostLike.objects.all()
    serializer_class = PostLikeCreateSerializer
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
