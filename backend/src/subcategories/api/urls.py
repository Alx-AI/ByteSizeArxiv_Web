from django.urls import path
from .views import SubcatListView, SubcatDetailView

urlpatterns = [
    path('',SubcatListView.as_view()),
    #Primary Key
    path('<pk>',SubcatDetailView.as_view())
]