from django.contrib.auth import get_user_model
from rest_framework import viewsets
from .models import Queue, QueueMembership
from .permissions import IsCreatorOrReadOnly
from .serializers import QueueSerializer, UserSerializer, QueueMembershipSerializer

class QueueViewSet(viewsets.ModelViewSet):
    permission_classes = (IsCreatorOrReadOnly,)
    queryset = Queue.objects.all()
    serializer_class = QueueSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

class QueueMembershipViewSet(viewsets.ModelViewSet):
    queryset = QueueMembership.objects.all()
    serializer_class = QueueMembershipSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        queue_id = self.kwargs.get('queue_id', None)
        if queue_id is not None:
            queryset = queryset.filter(queue_id=queue_id)
        return queryset