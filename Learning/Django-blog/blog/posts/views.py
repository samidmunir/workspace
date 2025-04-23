from django.shortcuts import render

from django.http import HttpRequest, HttpResponse

# Create your views here.

def hello_world(request: HttpResponse):
    return HttpResponse('Hello world!')