# Generated by Django 4.2 on 2023-05-30 09:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quenic', '0004_remove_queue_users'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='queuemembership',
            unique_together=set(),
        ),
    ]
