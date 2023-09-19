from rest_framework.serializers import *
from .models import InterviewRecord
from user.models import User
from position.models import Position


class InterviewCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    sender = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = InterviewRecord
        fields = ['id', 'sender', 'receiver', 'position', 'date', 'start_time', 'end_time', 'address', 'leave_message',
                  'contact', 'times', 'resume_position']


class _UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']


class _PositionSerializer(ModelSerializer):
    class Meta:
        model = Position
        fields = ['id', 'name', 'interview_times']


class InterviewRecordSerializer(ModelSerializer):
    receiver = _UserSerializer()
    position = _PositionSerializer()

    class Meta:
        model = InterviewRecord
        fields = "__all__"


class InterviewUpdateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    receiver = _UserSerializer(read_only=True)
    position = _PositionSerializer(read_only=True)

    class Meta:
        model = InterviewRecord
        fields = ['id', 'receiver', 'position', 'times', 'status', 'date', 'start_time', 'end_time', 'address',
                  'leave_message', 'contact']
