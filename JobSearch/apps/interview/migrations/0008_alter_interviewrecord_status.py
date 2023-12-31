# Generated by Django 3.2 on 2021-05-13 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interview', '0007_alter_interviewrecord_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interviewrecord',
            name='status',
            field=models.CharField(choices=[('待面试', '待面试'), ('已通过', '已通过'), ('未通过', '未通过'), ('已接受面试', '已接受面试'), ('已拒绝面试', '已拒绝面试')], default='待面试', max_length=10, verbose_name='是否通过'),
        ),
    ]
