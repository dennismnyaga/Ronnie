from django.urls import path
from . import views

urlpatterns = [
    path('', views.greatings),
    path('home', views.home)
]