# Generated by Django 4.0.3 on 2022-04-18 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('table_top_tracker', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='gameevent',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
