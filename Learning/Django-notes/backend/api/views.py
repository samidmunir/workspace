from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import User_Serializer, Note_Serializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Note

# Create your views here.

class Note_List_Create(generics.ListAPIView):
    serializer_class = Note_Serializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Note.objects.filter(author = user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(author = self.request.user)
        else:
            print(serializer.errors)

class Create_User_View(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = User_Serializer
    permission_classes = [AllowAny]