# Generated by Django 3.2 on 2021-05-10 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0003_resumeposition_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='resumeposition',
            name='status',
            field=models.CharField(choices=[('待审核', '待审核'), ('已通过', '已通过'), ('未通过', '未通过'), ('邀请中', '邀请中'), ('面试中', '面试中')], default='待审核', max_length=10),
        ),
    ]