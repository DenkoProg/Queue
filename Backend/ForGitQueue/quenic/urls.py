from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import QueueViewSet, UserViewSet, QueueMembershipViewSet, SwapRequestViewSet
from django.urls import include, path

router = DefaultRouter()
router.register(r'queues', QueueViewSet)
router.register(r'users', UserViewSet)
queue_router = SimpleRouter()
queue_router.register(r'members', QueueMembershipViewSet, basename='queue-members')
router.register(r'swap_request', SwapRequestViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('queues/<int:queue_id>/', include(queue_router.urls)),
]
