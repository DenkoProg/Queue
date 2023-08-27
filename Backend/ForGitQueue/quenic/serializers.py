from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Queue, QueueMembership, SwapRequest


class QueueSerializer(serializers.ModelSerializer):
    user_count = serializers.SerializerMethodField()
    creator = serializers.SerializerMethodField()

    class Meta:
        model = Queue
        fields = ('code', 'id', 'creator', 'name', 'description', 'user_count')

    def get_user_count(self, obj):
        return obj.count_users()

    def get_creator(self, obj):
        return obj.creator.id if obj.creator else None


class UserSerializer(serializers.ModelSerializer): # new
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)


class QueueMembershipSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    position = serializers.ReadOnlyField()

    class Meta:
        model = QueueMembership
        fields = ('id', 'user', 'username', 'queue', 'position')


class SwapRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = SwapRequest
        fields = ('id', 'sender', 'receiver', 'queue', 'accepted')