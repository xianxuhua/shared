# Generated by Django 3.2 on 2021-05-10 12:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('position', '0002_remove_position_resume_template'),
    ]

    operations = [
        migrations.RenameField(
            model_name='position',
            old_name='interview',
            new_name='interview_times',
        ),
    ]
