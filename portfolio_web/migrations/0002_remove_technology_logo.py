# Generated by Django 3.1 on 2020-08-14 23:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_web', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technology',
            name='logo',
        ),
    ]