from django.shortcuts import render
from django.utils import timezone
from .models import Music

# Create your views here.

def index(request):
    return render(request,'music/index.html')

def about(request):
    return render(request,'music/about.html')

def login(request):
    return render(request,'music/login.html')

def activity(request):
    return render(request,'music/activity.html')

def share(request):
    return render(request,'music/share.html')


def music_list(request):
    musics=Music.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request,'music/music_list.html',{'musics':musics})