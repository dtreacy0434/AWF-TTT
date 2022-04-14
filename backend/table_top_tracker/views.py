from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return HttpResponse("TableTopTracker")

def api_index(request):
    return HttpResponse("TTT API")