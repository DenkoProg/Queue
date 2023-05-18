from django.db import models
from django.contrib.auth.models import User
import uuid

class Queue(models.Model):
    code = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, related_name='queues_created')
    name = models.CharField(max_length=255)
    description = models.TextField()
    users = models.ManyToManyField(User, related_name='queues_joined')

    def __str__(self):
        return self.name

    def is_creator(self, user):
        return self.creator == user


class QueueMembership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    queue = models.ForeignKey(Queue, on_delete=models.CASCADE)
    position = models.PositiveIntegerField()

    class Meta:
        unique_together = ('user', 'queue')

