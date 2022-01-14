from django.shortcuts import render
from django.http import HttpResponse
import json
from django.http import JsonResponse

# Create your views here.


def userlogin(request):
    return render(request,'authentification/login.html')


# class usernamevalidationView(View):
#     def post(self, request):
#         data = json.loads(request.body)
#         username = data('username')

#         if str(username).isalnum():
#             return JsonResponse({'username_error': 'usernmae should only contain alphanumeric characters'})
#         return JsonResponse(({'username_valid', True}))