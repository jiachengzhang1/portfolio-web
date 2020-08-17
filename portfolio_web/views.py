from django.shortcuts import render
from django.http import HttpResponse
from .models import Project
from .models import Experience
from .models import Education

months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
          "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

def home(request):
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

    context = {'projects': projects, "title": "Project", 'analyticsId': 'UA-175463383-1'}
    return render(request, 'portfolio_web/home.html', context)


def experience(request):
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

    context = {"experiences":experiences, "title": "Experience", 'analyticsId': 'UA-175463383-1'}

    return render(request, 'portfolio_web/experience.html', context)


def education(request):
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

    return render(request, 'portfolio_web/education.html', {"educations": educations, "title": "Education", 'analyticsId': 'UA-175463383-1'})


def contact(request):
    return render(request, 'portfolio_web/contact.html', {"title": "Contact Me"})
