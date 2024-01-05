from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(['GET'])
def greatings(request):
    pro = Products.objects.all()
    serialize = ProductSerializer(pro, many=True)
    return Response(serialize.data)


def home(request):
    
    return HttpResponse('Welcome home')