from django.urls import path
from .views import ArticleListView, ArticleDetailView

urlpatterns = [
    path('',ArticleListView.as_view()),
    #Primary Key
    path('<pk>',ArticleDetailView.as_view())
]