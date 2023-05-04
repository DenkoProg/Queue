from rest_framework.routers import SimpleRouter
from .views import UserViewSet, QueueViewSet, QueueMembershipViewSet

router = SimpleRouter()
router.register('users', UserViewSet, basename='users')
router.register('queues', QueueViewSet, basename='queues')
router.register('queue_memberships', QueueMembershipViewSet, basename='queues')

urlpatterns = router.urls
