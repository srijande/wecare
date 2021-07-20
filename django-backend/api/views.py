# from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .models import Provider, Request, Service, Category

from .serializers import ServiceSerializer, ProviderSerializer, CategorySerializer, RequestSerializer
from rest_framework.response import Response
from rest_framework.filters import OrderingFilter

from django_filters.rest_framework import DjangoFilterBackend, FilterSet

from rest_framework.permissions import SAFE_METHODS, BasePermission, IsAdminUser, DjangoModelPermissions



# class RegisterView(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)





class PostUserWritePermission(BasePermission):
    message = "Editing service is restricted to the maintainer only."

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return obj.user == request.user    


class ServiceViewSet(viewsets.ModelViewSet): 
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer



class ProviderViewSet(viewsets.ModelViewSet):
    permission_classes = [PostUserWritePermission]
    queryset = Provider.objects.all()
    serializer_class = ProviderSerializer

    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['category', 'service', 'verified', 'state', 'district', 'city']
    ordering_fields = ['category', 'user']
    ordering = ['-verified', '-updated', '-created']





class RequestViewSet(viewsets.ModelViewSet):
    permission_classes = [PostUserWritePermission]
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['category', 'service', 'verified', 'state', 'district', 'city']
    ordering_fields = ['category', 'user']
    ordering = ['-created']


 
 