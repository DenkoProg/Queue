from django.shortcuts import get_object_or_404
from rest_framework import viewsets, permissions

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import QueueSerializer, UserSerializer, QueueMembershipSerializer
from .models import Queue, User, QueueMembership
from .permissions import IsCreatorOrReadOnly


# Create your views here.
class QueueViewSet(viewsets.ModelViewSet):
    queryset = Queue.objects.all().order_by('name')
    serializer_class = QueueSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class QueueMembershipViewSet(viewsets.ModelViewSet):
    queryset = QueueMembership.objects.all()
    serializer_class = QueueMembershipSerializer

@api_view(['GET'])
def get_queue(request, queue_id):
    queue = get_object_or_404(Queue, id=queue_id)
    serializer = QueueSerializer(queue)
    return Response(serializer.data)

@api_view(['POST'])
def add_user(request, queue_id):
    try:
        queue = Queue.objects.get(id=queue_id)
    except Queue.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    user_id = request.data.get('user_id', None)
    if user_id is None:
        return Response({"detail": "User ID is required."}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response(status.HTTP_404_NOT_FOUND)

    if queue.users.filter(id=user_id).exists():
        return Response({"detail": "User is already in the queue."}, status=status.HTTP_400_BAD_REQUEST)

    queue.users.add(user)
    queue_membership = QueueMembership(user=user, queue=queue, position=queue.users.count())
    queue_membership.save()
    serializer = QueueMembershipSerializer(queue_membership)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['PUT'])
def update_queue(request, queue_id):
    queue = get_object_or_404(Queue, id=queue_id)

    # Update the queue with the data from the request
    serializer = QueueSerializer(queue, data=request.data, partial=True, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def update_user(request, user_id):
    user = get_object_or_404(User, id=user_id)

    # Update the user with the data from the request
    serializer = UserSerializer(user, data=request.data, partial=True, context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_queue(request, queue_id):
    try:
        queue = Queue.objects.get(id=queue_id)
    except Queue.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    queue.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['DELETE'])
def remove_user(request, queue_id, user_id):
    try:
        queue = Queue.objects.get(id=queue_id)
    except Queue.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if not queue.users.filter(id=user_id).exists():
        return Response({"detail": "User is not in the queue."}, status=status.HTTP_400_BAD_REQUEST)

    queue.users.remove(user)
    queue_membership = QueueMembership.objects.get(user=user, queue=queue)
    queue_membership.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
