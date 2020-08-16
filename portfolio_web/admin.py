from django.contrib import admin
from .models import Project
from .models import Technology
from .models import Experience
from .models import Education


# Register your models here.
admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(Experience)
admin.site.register(Education)
