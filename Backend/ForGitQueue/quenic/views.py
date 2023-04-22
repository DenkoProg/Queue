from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.views import APIView

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import QueueSerializer, UserSerializer, QueueMembershipSerializer
from .models import Queue, User, QueueMembership


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


@api_view(['DELETE'])
def delete_queue(request, queue_id):
    try:
        queue = Queue.objects.get(id=queue_id)
    except Queue.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    queue.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)