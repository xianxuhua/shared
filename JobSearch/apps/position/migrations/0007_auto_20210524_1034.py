# Generated by Django 3.2 on 2021-05-24 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('position', '0006_positionlecture'),
    ]

    operations = [
        migrations.AddField(
            model_name='position',
            name='tags',
            field=models.JSONField(null=True),
        ),
        migrations.DeleteModel(
            name='PositionLecture',
        ),
    ]
