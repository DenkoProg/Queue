from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Queue, QueueMembership

class QueueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Queue
        fields = ('creator', 'name', 'description', 'users')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class QueueMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = QueueMembership
        fields = ('user', 'queue', 'position')