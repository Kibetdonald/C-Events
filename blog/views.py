from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

# We need a home view that we already called in the urls.py file
# def home(request):
    # return HttpResponse("<h1>Hello World, Am a software engineer</h1>");

    # now we've been able to display a single element
    # now we may want multiple element and that is where the concept of DTL comes into play
    # DTL is dynamic templating language
    # An alternative to DTL is ginger
    # First we need to create a folder to house all our templates
    # After that we need to specify the path to our templates folder in the settings.py file
    # In the home function specify the name of the html file
    #That's it!!!!

def home(request):
    return render(request,'index.html')
