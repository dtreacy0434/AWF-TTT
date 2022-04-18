from django.db import models
import uuid

# Represents the game pieces
# Example 
# name = dice6
# description = 6 sided dice
# quantity = 2
class GameObject(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    quantity = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name

# Represents the games
# Example 
# name = settlers of catan
# description = cards, dice6, etc
# times_played (This will be used for the stats API)
class Game(models.Model):
    name = models.CharField(max_length=30)
    game_objects = models.ManyToManyField(GameObject, blank=True)
    times_played = models.PositiveIntegerField() 
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


# Represents the User
# Example 
# name = TableTopPlayer
# game_list = Settlers of Catan, MouseTrap, etc
class User(models.Model):
    username = models.CharField(max_length=30)
    game_list = models.ManyToManyField(Game, blank=True)

    def __str__(self):
        return self.username
    

# Represents the Game Night
# Example 
# game_date = 2022-03-16
# game_time = 19:00
# players = TableTopPlayer, 2ndPlayer, etc
# game = Settler of Catan
class GameEvent(models.Model):
    game_date = models.DateField()
    game_time = models.TimeField()
    players = models.ManyToManyField(User)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.game_date} - {self.game} - {self.id}"