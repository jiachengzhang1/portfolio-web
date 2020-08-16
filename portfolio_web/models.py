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
    demoURL = models.URLField()
    codeURL = models.URLField()
    technologies = models.ManyToManyField(Technology, related_name="project")
    image = models.ImageField(upload_to="projects", null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    date_updated = models.DateTimeField(auto_now=True)
    date_added = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


class Experience(models.Model):
    image = models.ImageField(upload_to="experiences", null=True, blank=True)
    title = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    content = RichTextField()
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    startDate = models.DateField(null=True, blank=True)
    endDate = models.DateField(null=True, blank=True)
    dateUpdated = models.DateTimeField(auto_now=True)
    dateAdded = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title