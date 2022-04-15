from django.http import HttpResponse
from django.shortcuts import render
from django.views import View



def index(request):
    return HttpResponse("TableTopTracker")

def api_index(request):
    return HttpResponse("TTT API")

class all_games(View):
    def get(self, request):
        pass

class all_users(View):
    def get(self, request):
        pass

class all_game_objects(View):
    def get(self, request):
        pass

class game_data(View):
    def get(self, request):
        pass

class user_game_data(View):
    def get(self, request):
        pass

class game_game_objects(View):
    def get(self, request):
        pass

class game_event(View):
    def get(self, request):
        pass

class game_stats(View):
    def get(self, request):
        pass 

class user_stats(View):
    def get(self, request):
        pass