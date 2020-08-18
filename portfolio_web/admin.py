from django.contrib import admin
from .models import WebsiteInfo
from .models import Summary
from .models import Project
from .models import Technology
from .models import Experience
from .models import Education


admin.site.register(WebsiteInfo)
admin.site.register(Summary)
admin.site.register(Project)
admin.site.register(Technology)
admin.site.register(Experience)
admin.site.register(Education)
