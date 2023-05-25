from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins
from .models import Queue, QueueMembership
from .permissions import IsCreatorOrReadOnly
from .serializers import QueueSerializer, UserSerializer, QueueMembershipSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response

class QueueViewSet(viewsets.ModelViewSet):
    permission_classes = (IsCreatorOrReadOnly,)
    queryset = Queue.objects.all()
    serializer_class = QueueSerializer

    @action(detail=True, methods=['delete'], url_path='members/(?P<user_id>\d+)')
    def remove_membership(self, request, user_id=None, pk=None):
        if not user_id or not pk:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            QueueMembership.objects.get(queue_id=pk, user_id=user_id).delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except QueueMembership.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

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

