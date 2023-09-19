from rest_framework.serializers import *
from .models import Offer
from user.models import User
from position.models import Position
from enterprise.models import Enterprise


class _UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class _PositionSerializer(ModelSerializer):
    class Meta:
        model = Position
        fields = ['id', 'name']


class _EnterpriseSerializer(ModelSerializer):
    class Meta:
        model = Enterprise
        fields = ['id', 'name']


class OfferSerializer(ModelSerializer):
    position = _PositionSerializer()
    receiver = _UserSerializer()
    sender = _UserSerializer()
    enterprise = SerializerMethodField()

    class Meta:
        model = Offer
        fields = "__all__"

    def get_enterprise(self, offer):
        enterprise = Enterprise.objects.filter(user=offer.sender).first()
        return _EnterpriseSerializer(enterprise).data


class OfferCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    sender = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Offer
        fields = ['id', 'sender', 'receiver', 'position', 'file']
