from django.contrib import admin
from .models import Category, Service, Provider, Request
# Register your models here.
admin.site.register(Category)
admin.site.register(Service)
admin.site.register(Provider)
admin.site.register(Request)