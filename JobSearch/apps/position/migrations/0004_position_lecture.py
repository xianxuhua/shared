# Generated by Django 3.2 on 2021-05-11 17:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('enterprise', '0005_lecture_welfare'),
        ('position', '0003_rename_interview_position_interview_times'),
    ]

    operations = [
        migrations.AddField(
            model_name='position',
            name='lecture',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='enterprise.lecture', verbose_name='宣讲会'),
        ),
    ]
