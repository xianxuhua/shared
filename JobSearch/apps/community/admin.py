from django.contrib import admin
from .models import School, Profession, Post
from django.contrib.contenttypes.models import ContentType

admin.site.register(School)
admin.site.register(Profession)
admin.site.register(Post)
admin.site.register(ContentType)
