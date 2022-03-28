from django.urls import path,include
from . import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index),
    path('about/', views.about),
    path('login/', views.login),
    path('activity/',views.activity),
    path('share/',views.share),
    path('musiclist/',views.music_list)
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)