from rest_framework import viewsets, permissions
from rest_framework.authentication import SessionAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import GuideSerializer, GuideCreateSerializer
from .models import Guide


class GuideView(viewsets.ModelViewSet):
    queryset = Guide.objects.all()
    authentication_classes = [JWTAuthentication, SessionAuthentication]

    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), permissions.IsAdminUser()]
        return []

    def get_serializer_class(self):
        if self.action == "create":
            return GuideCreateSerializer
        return GuideSerializer
