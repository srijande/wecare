# Generated by Django 3.1.7 on 2021-05-03 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210503_1531'),
    ]

    operations = [
        migrations.AlterField(
            model_name='provider',
            name='about',
            field=models.TextField(max_length=512, null=True),
        ),
        migrations.AlterField(
            model_name='provider',
            name='city',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='provider',
            name='provider',
            field=models.CharField(max_length=256, null=True),
        ),
        migrations.AlterField(
            model_name='provider',
            name='status',
            field=models.CharField(max_length=256, null=True),
        ),
    ]
