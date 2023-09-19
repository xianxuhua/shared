from rest_framework.serializers import *
from .models import Policy


class PolicySerializer(ModelSerializer):
    class Meta:
        model = Policy
        fields = "__all__"
