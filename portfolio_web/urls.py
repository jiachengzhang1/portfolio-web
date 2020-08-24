from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="portfolio-web-home"),
    path('project/', views.project, name="portfolio-web-project"),
    path('experience/', views.experience, name="portfolio-web-experience"),
    path('education/', views.education, name="portfolio-web-education"),
    path('contact/', views.contact, name="portfolio-web-contact"),
]
