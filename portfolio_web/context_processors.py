from django.conf import settings
from .models import WebsiteInfo

def website_info(request):
    website_info = WebsiteInfo.objects.first()

    github_link = website_info.github
    github_name = get_name(github_link)

    linkedIn_link = website_info.linkedIn
    linkedIn_name = get_name(linkedIn_link)

    return { 
            'name': website_info.name, 
            'title': website_info.title,
            'type': website_info.webType,
            'url': website_info.url,
            'description': website_info.description,
            'email': website_info.email,
            'github_name': github_name,
            'github_link': github_link,
            'linkedIn_name': linkedIn_name,
            'linkedIn_link': linkedIn_link,
        }

def get_name(url):
    return url.split('/')[-1]