from rest_framework.routers import SimpleRouter
from .views import UserViewSet, QueueViewSet

router = SimpleRouter()
router.register('users', UserViewSet, basename='users')
router.register('queues', QueueViewSet, basename='queues')
urlpatterns = router.urls
