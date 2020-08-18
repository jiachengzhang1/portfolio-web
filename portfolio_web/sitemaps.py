from django.contrib.sitemaps import Sitemap
from django.shortcuts import reverse

class HomeViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 1

    def items(self):
        return ['portfolio-web-project']

    def location(self, item):
        return reverse(item)

class ExperienceViewSitemap(Sitemap):
    priority = 0.8

    def items(self):
        return ['portfolio-web-experience']

    def location(self, item):
        return reverse(item)

class EducationViewSitemap(Sitemap):
    changefreq = "yearly"
    priority = 0.8

    def items(self):
        return ['portfolio-web-education']

    def location(self, item):
        return reverse(item)

class ContactViewSitemap(Sitemap):
    priority = 0.6

    def items(self):
        return ['portfolio-web-contact']     

    def location(self, item):
        return reverse(item)