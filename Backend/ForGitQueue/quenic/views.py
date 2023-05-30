from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins
from .models import Queue, QueueMembership
from .permissions import IsCreatorOrReadOnly
from .serializers import QueueSerializer, UserSerializer, QueueMembershipSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class QueueViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = Queue.objects.all()
    serializer_class = QueueSerializer

    @action(detail=False, methods=['get'], url_path='search/(?P<code>[^/.]+)')
    def search(self, request, code=None):
        queue = get_object_or_404(Queue, code=code)
        serializer = self.get_serializer(queue)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    @action(detail=True, methods=['get'])
    def queues(self, request, pk=None):
        user = self.get_object()
        memberships = QueueMembership.objects.filter(user_id=user.id)
        queues = [membership.queue for membership in memberships]
        serializer = QueueSerializer(queues, many=True)
        return Response(serializer.data)

class QueueMembershipViewSet(mixins.CreateModelMixin,
                             mixins.RetrieveModelMixin,
                             mixins.UpdateModelMixin,
                             viewsets.GenericViewSet,
                             mixins.ListModelMixin):
    permission_classes = (AllowAny,)
    queryset = QueueMembership.objects.all()
    serializer_class = QueueMembershipSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        queue_id = self.kwargs.get('queue_id', None)
        if queue_id is not None:
            queryset = queryset.filter(queue_id=queue_id)
        return queryset

    def destroy(self, request, *args, **kwargs):
        queue_id = self.kwargs.get('queue_id')
        user_id = self.kwargs.get('pk')

        try:
            QueueMembership.objects.get(queue_id=queue_id, user_id=user_id).delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except QueueMembership.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
