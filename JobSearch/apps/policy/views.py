from rest_framework import viewsets, mixins, response, status, permissions
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import PolicySerializer
from .models import Policy
from .filters import PolicyFilter


class PolicyView(viewsets.ModelViewSet):
    serializer_class = PolicySerializer
    queryset = Policy.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]
    filter_backends = [DjangoFilterBackend]
    filterset_class = PolicyFilter

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), permissions.IsAdminUser()]
        return []
