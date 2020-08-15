from django.db import models
from django.utils import timezone
from ckeditor.fields import RichTextField


class Technology(models.Model):
    name = models.CharField(max_length=20)
    link = models.URLField()

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    content = RichTextField()
    technologies = models.ManyToManyField(Technology, related_name="project")
    image = models.ImageField(upload_to="projects", null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_added = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title
