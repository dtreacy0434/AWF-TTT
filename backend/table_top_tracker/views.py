from telnetlib import STATUS
from django.http import HttpResponse, JsonResponse
from django.http import HttpResponseRedirect, HttpResponseBadRequest
from django.shortcuts import render
from django.views import View
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views.generic import TemplateView
from django.core import serializers
import json
from .models import GameObject, Game, User, GameEvent



def index(request):
    return HttpResponse("TableTopTracker")

def api_index(request):
    return HttpResponse("TTT API")
#This will display the names of all the games in the database
#Passed the id and name [id needed if you want to then access that game specfically]
class all_games(View):
    def get(self, request):
        games = Game.objects.all()
        game_list = []
        for game in games:
            g_o = {
                "id" : game.id,
                "name" : game.name,
                "description" : game.description,
            }
            game_list.append(g_o)
            
        context = {
            'games' : game_list
        }

        return JsonResponse(context, content_type="application/json")
    
    #add a new game to the list, will require the ids of any gameobject if they have any
    def post(self, request):
        r = json.loads(request.body.decode())
    
        Game.objects.create(name=r['name'], times_played=0)
        
        return JsonResponse("OK", status=201, safe=False)

class is_user(View):
    def post(self, request):
        r = json.loads(request.body.decode())
        try:
            user = User.objects.get(username=r['username'])
        except User.DoesNotExist:
            return HttpResponseBadRequest()
        
        context = {
            "id" : user.id
        }
        return JsonResponse(context,content_type="application/json")

#This will display the name of all the players in the database
class all_users(View):
    def get(self, request):
        users = User.objects.all()
        user_list = []
        for u in users:
            u_o = {
                "id" : u.id,
                "username" : u.username
            }

            user_list.append(u_o)

        context = {
            'users' : user_list
        }

        return JsonResponse(context, content_type="application/json")

    #create a new user
    def post(self, request):
        r = json.loads(request.body.decode())
        User.objects.create(username =r['username'])

        return JsonResponse(status=201)

#This will display the name of all the game objects in the database
class all_game_objects(View):
    def get(self, request):
        gameObjects = GameObject.objects.all()
        gameobjects_list = []
        for gameobject in gameObjects:
            g_o_o = {
                "id" : gameobject.id,
                "name" : gameobject.name
            }
            gameobjects_list.append(g_o_o)

        context = {
            'game_objects' : gameobjects_list
        }
        return JsonResponse(context, content_type="application/json")

    #Creats a new game object
    
    def post(self, request):
        r = json.loads(request.body.decode())
        User.objects.create(name=r['name'], description=r['description'], quantity=r['quantity'])

        return JsonResponse(status=201)

class all_game_event(View):
    def get(self, request):
        gameEvents =  GameEvent.objects.all()
        gameevents_list = []
        for gameEvent in gameEvents:
            g_e = {
                "id" : gameEvent.id,
                "game_data" : gameEvent.game_date,
                "players" : gameEvent.players.count()
            }
            gameevents_list.append(g_e)

            context = {
                "game_events" : gameevents_list
            }
            
        return JsonResponse(context, content_type="application/json")

    def post(self, request, *args, **kwargs):
        r = json.loads(request.body.decode())
        print(r)

        g = GameEvent(game_date=r['game_date'], game_time=r['game_time'], game=Game.objects.get(id=r['game']))
        g.save()
        for user in r['players']:
            u_id = User.objects.get(id=user)
            g.players.add(u_id.id)

        g.save()

        return JsonResponse("Ok", status=201, safe=False)

# single game event by event id
class game_event(View):
    def get(self, request, *args, **kwargs):
        gameEvent = GameEvent.objects.get(id=kwargs['game_event_id'])
        print(gameEvent)
        return JsonResponse(gameEvent, content_type="application/json")

    def post(self, request, *args, **kwargs):
        pass

        return JsonResponse("Ok", status=201, safe=False)

class game_data(View):
    def get(self, request, *args, **kwargs):
        game = Game.objects.get(id=kwargs["game_id"])
        game_objects = []
        for obj in game.game_objects.all():
            game_objects.append(obj.name)
        
        context = {
            "name" : game.name,
            "times_played" : game.times_played,
            "game_objects" : game_objects,
            "description" : game.description,
        }
        
        return JsonResponse(context, content_type="application/json")

    def delete(self, request):
        pass

#This will show all the games the user has
class user_game_data(View):
    # @method_decorator(login_required)
    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs['user_id'])
        games = []
        for obj in user.game_list.all():
            g_o = {
                "id" : obj.id,
                "name" : obj.name,
            }
            games.append(g_o)
            
        context={
            'username' : user.username,
            'games' : games
        }
        return JsonResponse(context, content_type="application/json")

    def post(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs['user_id'])
        r = json.loads(request.body.decode())
        print(r)
        try:
            game_id = r['game_id']
        except:
            return JsonResponse("Bad Request", status=404, safe=False)

        game = Game.objects.get(id=game_id)

        user.game_list.add(game)

        return JsonResponse("OK", status=201, safe=False)


    def delete(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs['user_id'])
        r = json.loads(request.body.decode())
        print(r)
        game_id = r['game_id']

        game = Game.objects.get(id=game_id)

        user.game_list.remove(game)

        return JsonResponse("OK", status=201, safe=False)

class game_game_objects(View):
    def get(self, request, *args, **kwargs):
        game = Game.objects.get(id=kwargs['game_id'])
        game_objects_info = []
        for obj in game.game_objects.all():
            g_o = {}
            g_o['name'] = obj.name
            g_o['description'] = obj.description
            g_o['quantity'] = obj.quantity
            game_objects_info.append(g_o)

        context = {
            'game_name' : game.name,
            'game_objects' : game_objects_info,
        }
        return JsonResponse(context, content_type="application/json")

    def post(self, request):
        pass

# single game event by game id
class game_event(View):
    def get(self, request,*args, **kwargs):
        gameEvents = GameEvent.objects.get(id=kwargs['game_event_id'])
        players = []
        for player in gameEvents.players.all():
            players.append(player.username)
        context = {
            'game' : gameEvents.game.name,
            'date' : gameEvents.game_date,
            'time' : gameEvents.game_time,
            'players' : players
        }
        return JsonResponse(context, content_type="application/json")

    def delete(self, request, *args, **kwargs):
        gameevent = GameEvent.objects.get(id=kwargs["game_event_id"])
        gameevent.delete()

        return JsonResponse("OK", content_type="application/json", safe=False)
# game events of user
class user_game_event(TemplateView):
# @method_decorator(login_required)
    def get(self, request):
       pass

    def post(self, request):
        pass

    def delete(self, request):
        pass

    def put(self, request):
        pass

class game_stats(View):
    def get(self, request, *args, **kwargs):
        game = Game.objects.get(id=kwargs['game_id'])
        times_hosted = GameEvent.objects.filter(game=game).count()

        context = {
            'name' : game.name,
            'num_of_objects' : game.game_objects.count(),
            'times_played' : game.times_played,
            'times_hosted' : times_hosted 
        }
        
        return JsonResponse(context, content_type="application/json")


class user_stats(TemplateView):
    # @method_decorator(login_required)
    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs['user_id'])
        games_attended = GameEvent.objects.filter(players=user).count()

        games_counter = user.game_list.all().count()

        context = {
            'username' : user.username,
            'num_of_games' : games_counter,
            'games_attended' : games_attended
        }

        return JsonResponse(context, content_type="application/json")