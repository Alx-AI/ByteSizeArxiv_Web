from rest_framework import serializers

from subcategories.models import Subcategory
class SubcatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = ('title','parent','dates_loaded')