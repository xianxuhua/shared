from django.apps import apps
from rest_framework.serializers import *
from .models import Resume, ResumePosition, FileResume


_Position = apps.get_model("position.Position")


class ResumeSerializer(ModelSerializer):
    class Meta:
        model = Resume
        fields = ["id", "name", "gender", "age", "edu", "university",
                  "profession", "want", "desc", "contact"]


class ResumeCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Resume
        fields = ["id", "user", "name", "gender", "age", "edu", "university",
                  "profession", "want", "desc", "contact"]

    def validate_user(self, user):
        if Resume.objects.filter(user=user).count():
            raise ValidationError("您已经创建过简历")

        return user


class ResumeUpdateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)

    class Meta:
        model = Resume
        fields = ["id", "name", "gender", "age", "edu", "university",
                  "profession", "want", "desc", "contact"]


class FileResumeCreateSerializer(ModelSerializer):
    id = IntegerField(read_only=True)
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = FileResume
        fields = ['id', 'user', 'file']


class FileResumeSerializer(ModelSerializer):
    class Meta:
        model = FileResume
        fields = ['id', 'file']


class _PositionSerializer(ModelSerializer):
    class Meta:
        model = _Position
        fields = ['id', 'name']


class ApplyRecordSerializer(ModelSerializer):
    position = _PositionSerializer()
    resume = ResumeSerializer()
    file_resume = FileResumeSerializer()

    class Meta:
        model = ResumePosition
        fields = ["id", "user", "position", "add_time", "resume", "file_resume", "status", "category"]


class ApplyPositionSerializer(ModelSerializer):
    user = HiddenField(default=CurrentUserDefault())
    id = IntegerField(read_only=True)
    resume = PrimaryKeyRelatedField(required=False, allow_null=True, queryset=Resume.objects.all())
    file_resume = PrimaryKeyRelatedField(required=False, allow_null=True, queryset=FileResume.objects.all())

    class Meta:
        model = ResumePosition
        fields = ["id", "user", "position", "resume", "file_resume", "category"]
