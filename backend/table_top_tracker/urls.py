from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_index, name="api_index"),
    path('game/', views.all_games.as_view()),
    path('user/', views.all_users.as_view()),
    path('gameObjects/', views.all_game_objects.as_view()),
    path('gameEvent/', views.all_game_event.as_view()),
    path('game/<int:game_id>/', views.game_data.as_view()),
    path('user/<int:user_id>/game/', views.user_game_data.as_view()),
    path('game/<int:game_id>/gameObjects/', views.game_game_objects.as_view()),
    path('gameEvent/<int:game_event_id>/', views.game_event.as_view()),
    path('game/<int:game_id>/stats/', views.game_stats.as_view()),
    path('user/<int:user_id>/stats/', views.user_stats.as_view()),
    path('user/login/', views.is_user.as_view())
]