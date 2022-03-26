from django.shortcuts import render

# Create your views here.
def music_list(request):
    return render(request,'lyricmd/music_list.html',{})