# Generated by Django 3.0.5 on 2020-04-17 16:28

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_auto_20200417_2152'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='pub_date',
            field=models.DateField(default=datetime.datetime(2020, 4, 17, 16, 28, 38, 634447, tzinfo=utc)),
        ),
    ]
