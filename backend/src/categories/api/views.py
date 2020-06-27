from rest_framework.generics import ListAPIView, RetrieveAPIView
from categories.models import Category
from categories.models import Subcategory
from .serializer import SubcatSerializer
from .serializer import CategorySerializer
import categories


class CategoryListView(ListAPIView):
    #Here is where we make the view
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SubcatListView(ListAPIView):
    #Here is where we make the view
    queryset = Subcategory.objects.all()
    serializer_class = SubcatSerializer

class SubcatDetailView(RetrieveAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcatSerializer