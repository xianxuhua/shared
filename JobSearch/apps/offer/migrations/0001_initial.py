# Generated by Django 3.2 on 2021-05-10 17:20

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('position', '0003_rename_interview_position_interview_times'),
        ('enterprise', '0004_alter_lecture_date'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Offer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('add_time', models.DateTimeField(default=datetime.datetime.now, verbose_name='添加时间')),
                ('is_delete', models.BooleanField(default=False, verbose_name='是否删除')),
                ('status', models.CharField(choices=[('待接受', '待接收'), ('已接受', '已接受'), ('已拒绝', '已拒绝')], max_length=10, verbose_name='状态')),
                ('work_date', models.DateField(verbose_name='工作日期')),
                ('work_address', models.CharField(max_length=50, verbose_name='工作地址')),
                ('salary', models.IntegerField(verbose_name='薪水')),
                ('probation_month', models.IntegerField(verbose_name='试用期')),
                ('contract_year', models.IntegerField(verbose_name='劳动合同年限')),
                ('report_date', models.DateField(verbose_name='报道时间')),
                ('report_data', models.TextField(verbose_name='报道资料')),
                ('other_message', models.TextField(verbose_name='其他信息')),
                ('enterprise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='enterprise.enterprise', verbose_name='企业')),
                ('position', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='position.position', verbose_name='发放职位')),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='发放用户')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
