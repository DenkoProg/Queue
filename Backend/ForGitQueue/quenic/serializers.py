from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Queue, QueueMembership

class QueueSerializer(serializers.ModelSerializer):
    user_count = serializers.SerializerMethodField()
    class Meta:
        model = Queue
        fields = ('code', 'id', 'creator', 'name', 'description', 'user_count')

    def get_user_count(self, obj):
        return obj.count_users()

class UserSerializer(serializers.ModelSerializer): # new
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)


class QueueMembershipSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = QueueMembership
        fields = ('user', 'username', 'queue', 'position')
