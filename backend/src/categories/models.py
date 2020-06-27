from django.db import models
from django_mysql.models import ListCharField 

# Create your models here.

class Category (models.Model):
    title = models.CharField(max_length = 120)

    def __str__(self):
        return self.title
        
class Subcategory(models.Model):
    title = models.CharField(max_length=120)
    parent = models.CharField(max_length=120)
    dates_loaded = ListCharField(
        base_field = models.CharField(max_length=15),
        size = 10,
        max_length = (10*16))

    def __list__(self):
        return self.title, self.parent, self.dates_loaded

