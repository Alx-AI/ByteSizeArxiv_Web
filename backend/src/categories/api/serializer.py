from rest_framework import serializers

from categories.models import Category
from categories.models import Subcategory

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('title')

class SubcatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subcategory
        fields = ('title','parent','dates_loaded')