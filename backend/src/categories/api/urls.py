from django.urls import path
from .views import CategoryListView, CategoryDetailView

urlpatterns = [
    path('',CategoryListView.as_view()),
    #Primary Key
    path('<pk>',CategoryDetailView.as_view())
]