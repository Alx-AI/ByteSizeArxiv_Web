from rest_framework.generics import ListAPIView, RetrieveAPIView
from subcategories.models import Subcategory
from .serializer import SubcatSerializer
import subcategories


class SubcatListView(ListAPIView):
    #Here is where we make the view
    queryset = Subcategory.objects.all()
    serializer_class = SubcatSerializer

class SubcatDetailView(RetrieveAPIView):
    queryset = Subcategory.objects.all()
    serializer_class = SubcatSerializer