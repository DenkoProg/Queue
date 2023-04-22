from django.urls import path, include
from rest_framework import routers
from .views import QueueViewSet, UserViewSet, QueueMembershipViewSet, get_queue, delete_queue, UpdateQueue

router = routers.DefaultRouter()
router.register('queues', QueueViewSet)
router.register('users', UserViewSet)
router.register('memberships', QueueMembershipViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('queue/<int:queue_id>/', get_queue, name='get_queue'),
    path('queue/<int:queue_id>/delete/', delete_queue, name='delete_queue'),
    path('queue/<int:pk>/update/', UpdateQueue.as_view(), name='update_queue'),
]