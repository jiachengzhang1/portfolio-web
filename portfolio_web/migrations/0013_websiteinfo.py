# Generated by Django 3.1 on 2020-08-18 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio_web', '0012_delete_websiteinfo'),
    ]

    operations = [
        migrations.CreateModel(
            name='WebsiteInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField(blank=True, null=True)),
                ('name', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(max_length=500)),
                ('webType', models.CharField(max_length=10)),
                ('portfolioPageHeader', models.TextField()),
                ('experiencePageHeader', models.TextField()),
                ('educationPageHeader', models.TextField()),
                ('contactPageHeader', models.TextField()),
                ('email', models.EmailField(default='jiachengzhang1@email.arizona.edu', max_length=254)),
                ('github', models.URLField(default='https://github.com/jiachengzhang1')),
                ('linkedIn', models.URLField(default='www.linkedin.com/in/jiachengzhang-developer')),
            ],
        ),
    ]
