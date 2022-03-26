from django.shortcuts import render
from django.utils import timezone
from .models import Music

# Create your views here.
def music_list(request):
    musics=Music.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request,'lyricmd/music_list.html',{'musics':musics})