from django.http import HttpResponse
from django.shortcuts import render
from django.views import View
from .models import GameObject, Game, User, GameEvent


def index(request):
    return HttpResponse("TableTopTracker")

def api_index(request):
    return HttpResponse("TTT API")

class all_games(View):
    def get(self, request):
        games = Game.objects
        names = games.name.all()
        context = {
            'names' : names
        }
        return render(request, "game/game_list.html", context)  # temporary html file name I set

class all_users(View):
    def get(self, request):
        users = User.objects#.order_by('name')
        names = users.name.all()
        context = {
            'names' : names
        }
        return render(request, "user/user_list.html", context)  # temporary html file name I set

class all_game_objects(View):
    def get(self, request):
        gameObjects = GameObject.objects
        names = gameObjects.name.all()
        descriptions = gameObject.description.all()
        quantities = gameObject.quantity.all()
        context = {
            'names' : names,
            'descriptions' : descriptions,
            'quantities' : quantities
        }
        return render(request, "gameObjects/gameObject_list.html", context)  # temporary html file name I set

class all_game_event(View):
    def get(self, request):
        gameEvents = GameEvent.objects#.order_by('date')
        dates = gameEvents.game_date.all()
        times = gameEvents.game_time.all()
        players = gameEvents.players.all()
        games = gameEvents.game.all()
        names = games.name.all()
        context = {
            'names' : names,
            'dates' : dates,
            'times' : times,
            'players' : players
        }
        return render(request, "gameEvent/gameEvent_list.html", context) # temporary html file name

# single game event by event id
class game_event(View):
    def get(self, request):
        if request.method == 'GET':
            gameEvents = GameEvent.objects
            gameEvent = gameEvents.filter(id=request.event_id)
            name = gameEvent.game.name
            date = gameEvent.game_date
            time = gameEvent.game_time
            players = gameEvent.players
            context = {
                'name' : name,
                'date' : date,
                'time' : time,
                'players' : players
            }
            return render(request, 'gameEvent/{}/gameEvent_info.html'.format(request.event_id), context) # temporary html file name

class game_data(View):
    def get(self, request):
        pass

class user_game_data(View):
# @login_required
    def get(self, request):
        if request.method == 'GET':
            gameData = request.user.game_list  
            names = gameData.name.all()
            game_objects = gameData.game_objects.all()
            times_played = gameData.times_played.all()
            context={
                'names' : names,
                'game_objects' : game_objects,
                'times_played' : times_played
            }
            return render(request, 'user/{}/game'.format(request.user.id), context)

    def post(self, request):
        if request.method == 'POST':
            user = request.user
#            user.game_list.add()

class game_game_objects(View):
    def get(self, request):
        gameObjects = GameObject.objects
        gameObject = gameObjects.filter(id=request.game_id)
        name = gameObject.name
        description = gameObject.description
        quantity = gameObject.quantity
        context = {
            'name' : name,
            'description' : description,
            'quantity' : quantity
        }
        return render(request, 'game/{}/gameObjects/gameObject.html'.format(request.game_id), context)

# game event by game id
class game_game_event(View):
    def get(self, request):
        gameEvents = GameEvent.objects
        gameEvent = gameEvents.filter(game.game_id=request.game_id)
        name = gameEvent.game.name
        date = gameEvent.game_date
        time = gameEvent.game_time
        players = gameEvent.players
        context = {
            'name' : name,
            'date' : date,
            'time' : time,
            'players' : players
        }
        return render(request, 'gameEvent/{}/gameEvent_info.html'.format(request.game_id), context) # temporary html file name


class game_stats(View):
    def get(self, request):
        pass 

class user_stats(View):
# @login_required
    def get(self, request):
        user = User.objects.filter(id=request.user_id)
        name = user.name
        game_list = user.game_list
        pass