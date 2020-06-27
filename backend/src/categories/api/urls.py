from django.urls import path
from .views import CategoryListView, CategoryDetailView
from .views import SubcatListView, SubcatDetailView

urlpatterns = [
    path('',SubcatListView.as_view()),
    #Primary Key
    path('<pk>',SubcatDetailView.as_view()),
    path('',CategoryListView.as_view()),
    #Primary Key
    path('<pk>',CategoryDetailView.as_view())
]