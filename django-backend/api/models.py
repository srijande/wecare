from django.db import models
# from users.models import User
from django.utils import timezone
from django.contrib.auth.models import User



class Category(models.Model): 
    category = models.CharField(max_length=256)
    def __str__(self):
        return self.category


    
class Service(models.Model):
    service = models.CharField(max_length=256)
    categories = models.ManyToManyField(Category,blank=True)

    def __str__(self):
        return self.service
    

class Provider(models.Model):
    user = models.ForeignKey(User,null=True, on_delete=models.PROTECT)
    service = models.ForeignKey(Service,null=True, on_delete=models.PROTECT)
    category = models.ForeignKey(Category,null=True, on_delete=models.PROTECT)
    about = models.TextField(max_length=512, null=True)
    provider = models.CharField(max_length=256, null=True)
    contact = models.IntegerField(default=0)
    state = models.CharField(max_length=256)
    district = models.CharField(max_length=256, null=True)
    city = models.CharField(max_length=256, null=True)
    verified = models.BooleanField(default=False)
    created = models.DateTimeField(default=timezone.now, blank=True)
    updated = models.DateTimeField(default=timezone.now, blank=True)
    status = models.CharField(max_length=256, null=True, default=0)
    report = models.IntegerField(default=0)
    upvote = models.IntegerField(default=0)
    def __str__(self):
        return self.user.username


class Request(models.Model):
    user = models.ForeignKey(User,null=True, on_delete=models.PROTECT)
    service = models.ForeignKey(Service,null=True, on_delete=models.PROTECT)
    category = models.ForeignKey(Category,null=True, on_delete=models.PROTECT)
    about = models.TextField(max_length=512, null=True)
    # provider = models.CharField(max_length=256, null=True)
    # contact = models.IntegerField(default=0)
    state = models.CharField(max_length=256)
    district = models.CharField(max_length=256, null=True)
    city = models.CharField(max_length=256, null=True)
    verified = models.BooleanField(default=False)
    created = models.DateTimeField(default=timezone.now, blank=True)
    status = models.CharField(max_length=256, null=True, default=0)
    report = models.IntegerField(default=0)
    upvote = models.IntegerField(default=0)
    def __str__(self):
        return self.user.username



