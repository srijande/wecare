from django.urls import path,include
from rest_framework import routers
from api import views as api_views


router = routers.DefaultRouter()
router.register(r'providers', api_views.ProviderViewSet)
router.register(r'requests', api_views.RequestViewSet)
router.register(r'services', api_views.ServiceViewSet)


urlpatterns = [
    path('', include(router.urls)),


]
