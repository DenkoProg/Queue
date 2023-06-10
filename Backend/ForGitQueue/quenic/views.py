from django.contrib.auth import get_user_model
from rest_framework import viewsets, mixins
from .models import Queue, QueueMembership, User, SwapRequest
from .permissions import IsCreatorOrReadOnly
from .serializers import QueueSerializer, UserSerializer, QueueMembershipSerializer, SwapRequestSerializer
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

    def perform_create(self, serializer):
        queue = serializer.save()
        creator_id = self.request.data['creator']
        user = User.objects.get(id=creator_id)
        QueueMembership.objects.create(user=user, queue=queue)

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

    def create(self, request, *args, **kwargs):
        user = request.data.get('user')
        queue = request.data.get('queue')

        if QueueMembership.objects.filter(user=user, queue=queue).exists():
            return Response({"message": "User is already in the queue"}, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset()
        queue_id = self.kwargs.get('queue_id', None)
        if queue_id is not None:
            queryset = queryset.filter(queue_id=queue_id).order_by('position')
        return queryset

    def destroy(self, request, *args, **kwargs):
        queue_id = self.kwargs.get('queue_id')
        user_id = self.kwargs.get('pk')

        try:
            QueueMembership.objects.get(queue_id=queue_id, user_id=user_id).delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except QueueMembership.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)


class SwapRequestViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    queryset = SwapRequest.objects.all()
    serializer_class = SwapRequestSerializer

    def update(self, request, *args, **kwargs):
        swap_request = self.get_object()

        if swap_request.accepted:
            sender_membership = QueueMembership.objects.get(user=swap_request.sender, queue=swap_request.queue)
            receiver_membership = QueueMembership.objects.get(user=swap_request.receiver, queue=swap_request.queue)
            sender_membership.position, receiver_membership.position = receiver_membership.position, sender_membership.position
            sender_membership.save()
            receiver_membership.save()

        return super().update(request, *args, **kwargs)