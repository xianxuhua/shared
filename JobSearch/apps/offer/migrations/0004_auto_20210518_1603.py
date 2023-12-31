# Generated by Django 3.2 on 2021-05-18 16:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offer', '0003_alter_offer_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offer',
            name='contract_year',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='other_message',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='probation_month',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='report_data',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='report_date',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='salary',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='work_address',
        ),
        migrations.RemoveField(
            model_name='offer',
            name='work_date',
        ),
        migrations.AddField(
            model_name='offer',
            name='file',
            field=models.FileField(null=True, upload_to='', verbose_name='录用通知'),
        ),
    ]
