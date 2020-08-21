from django.shortcuts import render
from django.http import HttpResponse
from django.conf import settings
from .models import WebsiteInfo
from .models import Project
from .models import Experience
from .models import Education

months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
          "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


default_context = {'analyticsId': settings.GOOGLE_ANALYTICS_ID}

def home(request):
    website_info = WebsiteInfo.objects.first()
    projects = []

    for project in Project.objects.order_by('priority'):
        projects.append({
            'date': months[project.date.month-1] + ", " + str(project.date.year),
            'title': project.title,
            'subtitle': project.subtitle,
            'content': project.content,
            'image': project.image,
            'demoURL': project.demoURL,
            'codeURL': project.codeURL,
            'technologies': [{'name': v.name, 'link': v.link} for v in project.technologies.all()]
        })

    context = merge_context(default_context, {
        'projects': projects,
        "page_title": "Project",
        'header_paragraph': website_info.portfolioPageHeader if website_info != None else '',
        'header': 'PROJECT' if len(projects) == 1 else 'PROJECTS'
    })

    return render(request, 'portfolio_web/pages/project.html', context)


def experience(request):
    website_info = WebsiteInfo.objects.first()
    experiences = []

    for experience in Experience.objects.order_by('priority'):
        start = experience.startDate
        end = experience.endDate
        
        period = ""
        if start != None and end != None:
            period += months[start.month - 1] + " " + str(start.year)
            period += " –– "
            period += months[end.month - 1] + " " + str(end.year)
        elif start == None and end != None:
            period += months[end.month - 1] + " " + str(end.year)
        elif start != None and end == None:
            period += months[start.month - 1] + " " + str(start.year)
            period += " –– "
            period += "Present"

        location = (experience.city + ", " + experience.state)

        experiences.append({
            'image': experience.image,
            'title': experience.title,
            'content': experience.content,
            'position': experience.position,
            'date': period,
            'location': location
        })

    context = merge_context(default_context, {
        "experiences":experiences,
        "page_title": "Experience",
        'header_paragraph': website_info.experiencePageHeader if website_info != None else '',
        'header': 'EXPERIENCE' if len(experiences) == 1 else 'EXPERIENCES'
    })

    return render(request, 'portfolio_web/pages/experience.html', context)


def education(request):
    website_info = WebsiteInfo.objects.first()
    educations = []

    for education in Education.objects.order_by('priority'):
        start = education.startDate
        end = education.endDate
        
        period = ""
        if start != None and end != None:
            period += months[start.month - 1] + " " + str(start.year)
            period += " –– "
            period += months[end.month - 1] + " " + str(end.year)
        elif start == None and end != None:
            period += months[end.month - 1] + " " + str(end.year)
        elif start != None and end == None:
            period += months[start.month - 1] + " " + str(start.year)
            period += " –– "
            period += "Present"

        educations.append({
            'degree': education.degree,
            'content': education.content,
            'institution': education.institution,
            'city': education.city,
            'state': education.state,
            'period': period
        })

    context = merge_context(default_context, {
        "educations": educations,
        "page_title": "Education",
        'header_paragraph': website_info.educationPageHeader if website_info != None else '',
        'header': 'EDUCATION' if len(educations) == 1 else 'EDUCATIONS'
    })

    return render(request, 'portfolio_web/pages/education.html', context)


def contact(request):
    website_info = WebsiteInfo.objects.first()
    
    context = merge_context(default_context, {
        "page_title": "Contact Me",
        'header_paragraph': website_info.contactPageHeader if website_info != None else '',
        'header': 'CONTACT ME'
    })

    return render(request, 'portfolio_web/pages/contact.html', context)


def merge_context(c1, c2):
    context = {}
    context.update(c1)
    context.update(c2)
    return context