from django.shortcuts import render
from rest_framework import viewsets

from .serializers import QueueSerializer
from .models import Queue

from .serializers import UserSerializer
from django.contrib.auth.models import User

# Create your views here.
class QueueViewSet(viewsets.ModelViewSet):
    queryset = Queue.objects.all().order_by('name')
    serializer_class = QueueSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer