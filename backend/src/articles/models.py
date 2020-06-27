from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=256)
    content = models.TextField()
    date = models.DateField(default=('1996-08-08'))
    subcategory = models.TextField(default = "NA")
    

    def __list__(self):
        return self.title, self.content, self.date, self.subcategory