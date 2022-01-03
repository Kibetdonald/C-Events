from django.urls import path
# import views
from . import views

urlpatterns = [
    # path/function/name
    path('', views.home, name='home'),
    path('add', views.add, name='add')
]
