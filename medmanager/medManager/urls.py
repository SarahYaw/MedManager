from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("", include("djangoFiles.urls")),
    path("admin/", admin.site.urls),
]
