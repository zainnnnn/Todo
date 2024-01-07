from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(prefix="todo", viewset=views.TodoViewSet, basename="todo")

urlpatterns = [
    path('', include(router.urls)),
]
