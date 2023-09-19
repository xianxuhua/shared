from rest_framework.serializers import *
from .models import Guide


class GuideSerializer(ModelSerializer):
    class Meta:
        model = Guide
        fields = "__all__"


class GuideCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)

    class Meta:
        model = Guide
        fields = ['id', 'title', 'content', 'category']
