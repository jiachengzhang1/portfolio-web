# Generated by Django 3.1 on 2020-08-16 23:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_web', '0004_auto_20200816_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='education',
            name='priority',
            field=models.IntegerField(),
        ),
    ]
