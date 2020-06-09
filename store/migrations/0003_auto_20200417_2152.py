# Generated by Django 3.0.5 on 2020-04-17 16:22

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_auto_20200417_2149'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_image',
            field=models.ImageField(default='', upload_to='store/img'),
        ),
        migrations.AlterField(
            model_name='product',
            name='pub_date',
            field=models.DateField(default=datetime.datetime(2020, 4, 17, 16, 22, 42, 777355, tzinfo=utc)),
        ),
    ]