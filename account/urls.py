from django.urls import path
# import views
from . import views
# from .views import usernamevalidationView, userlogin

urlpatterns = [
    # path/function/name
    path('', views.userlogin, name='userlogin'),
    # path('validtae-username', usernamevalidationView.as_view, name="validate-username")
    
]
