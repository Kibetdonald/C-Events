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
    return render(request,'index.html', {'name': 'Donald', 'title': 'Software Engineer'})

def add(request):
    val1 = int(request.POST['num1'])
    val2 = int(request.POST['num2'])
    res = val1 + val2
    return render(request, 'result.html', {'result': res})

def index(request):
    #  creating object 1
    destination1= Destination()
    dest1.name = 'China Town'
    dest1.desc ='Its a very big town'
    dest1.img = 'destination_1.jpg'
    dest1.price = 650
    dest1.offer = True

    # creating object 2
    destination2= Destination()
    dest2.name = 'Mumbai'
    dest2.desc ='Beatiful city'
    dest2.img = 'destination_2.jpg'
    dest2.price = 730
    dest2.offer = False

    # creating object 3
    destination3= Destination()
    dest3.name = 'Nairobi'
    dest3.desc ='Most innovative city in the world, Has brilliant minds'
    dest3.img = 'destination_3.jpg'
    dest3.offer = False
    

    destinations = [dest1, dest2, dest3]


    return render(request, 'index.html', {'destinations': dests})
