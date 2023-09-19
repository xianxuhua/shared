# Generated by Django 3.2 on 2021-05-10 17:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('offer', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offer',
            name='enterprise',
        ),
        migrations.AddField(
            model_name='offer',
            name='sender',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='offer_sender', to=settings.AUTH_USER_MODEL, verbose_name='发放企业账号'),
        ),
        migrations.AlterField(
            model_name='offer',
            name='receiver',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='offer_receiver', to=settings.AUTH_USER_MODEL, verbose_name='发放用户'),
        ),
    ]