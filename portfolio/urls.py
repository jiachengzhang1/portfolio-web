from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.contrib.sitemaps.views import sitemap
from django.views.generic.base import TemplateView

from portfolio_web.sitemaps import HomeViewSitemap, ExperienceViewSitemap, EducationViewSitemap, ContactViewSitemap

sitemaps = {
    'home': HomeViewSitemap,
    'experience': ExperienceViewSitemap,
    'education': EducationViewSitemap,
    'contact': ContactViewSitemap
}

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("portfolio_web.urls")),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}),
    path(
        "robots.txt",
        TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
    ),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
