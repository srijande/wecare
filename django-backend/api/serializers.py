from rest_framework import serializers
from .models import Provider, Request, Service, Category

from django.utils import timezone

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','category']


class ServiceSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = Service
        fields = ['id', 'service', 'categories']

    # def create(self, validate_data):
    #     return Service.objects.create(**validate_data)

thisservice = 's'

class ProviderSerializer(serializers.ModelSerializer):
    
    this_service = serializers.CharField(source='service.service',read_only=True)
    this_category = serializers.CharField(source='category.category',read_only=True)
    maintained_by_first_name = serializers.CharField(source='user.first_name',read_only=True)
    maintained_by_last_name = serializers.CharField(source='user.last_name',read_only=True)
    validate = serializers.DateTimeField(source='updated',read_only=True)
    gap = serializers.SerializerMethodField('get_alternate_name')

    def get_alternate_name(self, obj):
        diff  = timezone.now()-obj.updated
 
        days    = divmod(diff.total_seconds(), 86400)      
        hours   = divmod(days[1], 3600)              
        minutes = divmod(hours[1], 60)   
        seconds = divmod(minutes[1], 1) 

        gap = ""
        if days[0]!=0:
            gap+= str(int(days[0]))
            gap+=" day "

        if hours[0]!=0:
            if days[0]!=0:
                gap+=", "
            gap+= str(int(hours[0]))
            gap+=" hour "

        if minutes[0]>0:
            if hours[0]!=0:
                gap+=", "
            gap+= str(int(minutes[0]))
            gap+=" minute"

        # if seconds[0]>0:
        #     if minutes[0]!=0:
        #         gap+=", "
        #     gap+= str(int(seconds[0]))
        #     gap+=" second"
         
 
        
        return gap
    class Meta:
        model = Provider
        fields = '__all__'

 

class RequestSerializer(serializers.ModelSerializer):
    
    this_service = serializers.CharField(source='service.service',read_only=True)
    this_category = serializers.CharField(source='category.category',read_only=True)
    posted_by_first_name = serializers.CharField(source='user.first_name',read_only=True)
    posted_by_last_name = serializers.CharField(source='user.last_name',read_only=True)
    contact = serializers.CharField(source='user.username',read_only=True)
    
    gap = serializers.SerializerMethodField('get_alternate_name')

    def get_alternate_name(self, obj):
        diff  = timezone.now()-obj.created
 
        days    = divmod(diff.total_seconds(), 86400)      
        hours   = divmod(days[1], 3600)              
        minutes = divmod(hours[1], 60)   
        seconds = divmod(minutes[1], 1) 

        gap = ""
        if days[0]!=0:
            gap+= str(int(days[0]))
            gap+=" day "

        if hours[0]!=0:
            if days[0]!=0:
                gap+=", "
            gap+= str(int(hours[0]))
            gap+=" hour "

        if minutes[0]>0:
            if hours[0]!=0:
                gap+=", "
            gap+= str(int(minutes[0]))
            gap+=" minute"

        # if seconds[0]>0:
        #     if minutes[0]!=0:
        #         gap+=", "
        #     gap+= str(int(seconds[0]))
        #     gap+=" second"
         
 
        
        return gap

    class Meta:
        model = Request
        fields = '__all__'

