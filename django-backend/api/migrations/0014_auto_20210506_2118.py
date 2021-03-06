# Generated by Django 3.1.7 on 2021-05-06 15:48

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20210504_2356'),
    ]

    operations = [
        migrations.AlterField(
            model_name='provider',
            name='created',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='provider',
            name='updated',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='request',
            name='created',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now),
        ),
    ]
