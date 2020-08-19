from django.conf import settings
from .models import WebsiteInfo


def website_info(request):
    website_info = WebsiteInfo.objects.first()
    if website_info != None:
        github_link = website_info.github
        github_name = get_name(github_link)
        linkedIn_link = website_info.linkedIn
        linkedIn_name = get_name(linkedIn_link)
        avatar = website_info.avatar
        if avatar == None:
            avatar = ''

    else:
        github_link = ''
        github_name = ''
        linkedIn_link = ''
        linkedIn_name = ''
        avatar = ''

    return { 
            'name': website_info.name if website_info != None else '', 
            'title': website_info.title if website_info != None else '',
            'type': website_info.webType if website_info != None else '',
            'url': website_info.url if website_info != None else '',
            'description': website_info.description if website_info != None else '',
            'email': website_info.email if website_info != None else '',
            'github_name': github_name,
            'github_link': github_link,
            'linkedIn_name': linkedIn_name,
            'linkedIn_link': linkedIn_link,
            'resume_link': website_info.resumeLink if website_info != None else '',
            'avatar': avatar
        }


def get_name(url):
    return url.split('/')[-1]