from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=256)
    content = models.TextField()

    def __tuple__(self):
        return self.title, self.content