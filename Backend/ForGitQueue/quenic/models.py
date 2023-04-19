from django.db import models
from django.contrib.auth.models import AbstractUser

class UserProfile(AbstractUser):
    nickName = models.CharField(max_length=255)
    joined_date = models.DateField()
    email = models.CharField(max_length=255)

class Queue(models.Model):
    creator = models.ForeignKey(UserProfile, on_delete=models.PROTECT, related_name='queues_created')
    name = models.CharField(max_length=255)
    description = models.TextField()
    users = models.ManyToManyField(UserProfile, related_name='queues_joined')

    def __str__(self):
        return self.name
