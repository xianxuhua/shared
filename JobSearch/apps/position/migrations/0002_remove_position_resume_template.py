# Generated by Django 3.2 on 2021-05-09 12:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('position', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='position',
            name='resume_template',
        ),
    ]
