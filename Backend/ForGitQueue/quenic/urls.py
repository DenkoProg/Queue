from django.urls import path, include
from rest_framework import routers
from .views import QueueViewSet, UserViewSet, QueueMembershipViewSet, get_queue, delete_queue, update_queue, add_user, update_user, remove_user

router = routers.DefaultRouter()
router.register('queues', QueueViewSet)
router.register('users', UserViewSet)
router.register('memberships', QueueMembershipViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('queues/<int:queue_id>/', get_queue, name='get_queue'),
    path('queues/<int:queue_id>/delete/', delete_queue, name='delete_queue'),
    path('queues/<int:queue_id>/add_user/', add_user, name='add_user_to_queue'),
    path('queues/<int:queue_id>/update/', update_queue, name='update_queue'),
    path('users/<int:user_id>/update/', update_user, name='update_queue'),
    path('queues/<int:queue_id>/remove_user/<int:user_id>/', remove_user, name='remove_user')
]