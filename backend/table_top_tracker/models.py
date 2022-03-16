from django.db import models

# Represents the game pieces
# Example 
# name = dice6
# description = 6 sided dice
# quantity = 2
class GameObject(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField()
    quantity = models.PositiveSmallIntegerField()

# Represents the games
# Example 
# name = settlers of catan
# description = cards, dice6, etc
# times_played (This will be used for the stats API)
class Game(models.Model):
    name = models.CharField(max_length=30)
    game_objects = models.ManyToMany(GameObject, on_delete=models.CASCADE)
    times_played = models.PositiveIntegerField() 

# Represents the User
# Example 
# name = TableTopPlayer
# game_list = Settlers of Catan, MouseTrap, etc
class User(models.Model):
    username = models.CharField(max_length=30)
    game_list = models.ManyToMany(Game, on_delete=models.CASCADE)

# Represents the Game Night
# Example 
# game_date = 2022-03-16
# game_time = 19:00
# players = TableTopPlayer, 2ndPlayer, etc
# game = Settler of Catan
class GameEvent(models.Model):
    game_date = models.DateField()
    game_time = models.TimeField()
    players = models.ManyToMany(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)