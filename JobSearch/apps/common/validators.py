from rest_framework.validators import ValidationError


class FileFormatsValidator:
    def __init__(self, formats, message="请上传正确的文件格式"):
        self.formats = formats
        self.message = message

    def __call__(self, value):
        if value.name.split(".")[-1] not in self.formats:
            raise ValidationError(self.message)
