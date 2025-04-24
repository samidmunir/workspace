from django.contrib import admin
from django.urls import path, include

from api.views import Create_User_View
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', Create_User_View.as_view(), name = 'register'),
    path('api/token/', TokenObtainPairView.as_view(), name = 'get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name = 'refresh'),
    path('api-auth/', include('rest_framework.urls')),
]