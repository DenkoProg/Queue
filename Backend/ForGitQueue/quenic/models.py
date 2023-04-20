from django.db import models
from django.contrib.auth.models import User

class Queue(models.Model):
    creator = models.ForeignKey(User, on_delete=models.PROTECT, related_name='queues_created')
    name = models.CharField(max_length=255)
    description = models.TextField()
    users = models.ManyToManyField(User, related_name='queues_joined')

    def __str__(self):
        return self.name
