from django.shortcuts import render
from django.http import HttpResponse
from .models import Project


def home(request):
    months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
              "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

    projects = []

    for project in Project.objects.all():
        projects.append({
            'date': months[project.date.month-1] + ", " + str(project.date.year),
            'title': project.title,
            'content': project.content,
            'image': project.image,
            'technologies': [{'name': v.name, 'link': v.link} for v in project.technologies.all()]
        })

    context = {'projects': projects}
    return render(request, 'portfolio_web/home.html', context)


def experience(request):
    return render(request, 'portfolio_web/experience.html', {"title": "Experience"})


def education(request):
    return render(request, 'portfolio_web/education.html', {"title": "Education"})


def contact(request):
    return render(request, 'portfolio_web/contact.html', {"title": "Contact Me"})
