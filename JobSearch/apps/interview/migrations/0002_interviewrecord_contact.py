# Generated by Django 3.2 on 2021-05-10 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interview', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='interviewrecord',
            name='contact',
            field=models.CharField(max_length=20, null=True),
        ),
    ]