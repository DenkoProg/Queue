from django.urls import path, include
from rest_framework import routers
from .views import QueueViewSet, UserViewSet, QueueMembershipViewSet, get_queue, delete_queue

router = routers.DefaultRouter()
router.register('queues', QueueViewSet)
router.register('users', UserViewSet)
router.register('memberships', QueueMembershipViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('queues/<int:queue_id>/', get_queue, name='get_queue'),
    path('queues/<int:queue_id>/delete/', delete_queue, name='delete_queue'),
]