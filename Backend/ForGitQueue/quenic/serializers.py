from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Queue

class QueueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Queue
        fields = ('id','creator', 'name', 'description', 'users')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')