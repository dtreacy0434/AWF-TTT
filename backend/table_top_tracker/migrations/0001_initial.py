# Generated by Django 4.0.3 on 2022-04-14 20:32

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('times_played', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='GameObject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('quantity', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=30)),
                ('game_list', models.ManyToManyField(blank=True, to='table_top_tracker.game')),
            ],
        ),
        migrations.CreateModel(
            name='GameEvent',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('game_date', models.DateField()),
                ('game_time', models.TimeField()),
                ('game', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='table_top_tracker.game')),
                ('players', models.ManyToManyField(to='table_top_tracker.user')),
            ],
        ),
        migrations.AddField(
            model_name='game',
            name='game_objects',
            field=models.ManyToManyField(blank=True, to='table_top_tracker.gameobject'),
        ),
    ]
