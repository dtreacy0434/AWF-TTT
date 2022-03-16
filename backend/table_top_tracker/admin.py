from django.contrib import admin
from .models import Game, GameObject, User, GameEvent

admin.site.register(Game)
admin.site.register(GameObject)
admin.site.register(User)
admin.site.register(GameEvent)
