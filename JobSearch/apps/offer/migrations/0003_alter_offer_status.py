# Generated by Django 3.2 on 2021-05-10 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offer', '0002_auto_20210510_1723'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offer',
            name='status',
            field=models.CharField(choices=[('待接受', '待接受'), ('已接受', '已接受'), ('已拒绝', '已拒绝')], default='待接受', max_length=10, verbose_name='状态'),
        ),
    ]
