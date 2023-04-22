from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'queues', views.QueueViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',
                              namespace='rest_framework')),
    path('queues/<int:queue_id>/delete/', views.delete_queue, name='delete_queue'),
    path('queues/create/', views.create_queue, name='create_queue'),
]