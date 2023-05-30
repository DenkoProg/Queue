from django.db import models
from django.contrib.auth.models import User
import uuid
from django.dispatch import receiver
from django.db.models.signals import post_delete

class Queue(models.Model):
    code = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)
    creator = models.ForeignKey(User, on_delete=models.PROTECT, related_name='queues_created')
    name = models.CharField(max_length=255)
    description = models.TextField()


    def __str__(self):
        return self.name

    def is_creator(self, user):
        return self.creator == user

    def count_users(self):
        return self.queuemembership_set.count()



class QueueMembership(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    queue = models.ForeignKey(Queue, on_delete=models.CASCADE)
    position = models.PositiveIntegerField()

    def save(self, *args, **kwargs):
        if not self.pk:
            self.position = self.queue.count_users() + 1
        super().save(*args, **kwargs)

@receiver(post_delete, sender=QueueMembership)
def update_queue_positions(sender, instance, **kwargs):
    memberships = QueueMembership.objects.filter(queue=instance.queue).order_by('position')
    for i, membership in enumerate(memberships):
        membership.position = i + 1
        membership.save()

    class Meta:
        unique_together = ('user', 'queue')

