from django.shortcuts import render
from django.http import HttpResponse
from .models import Project
from .models import Experience

months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
          "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

def home(request):
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
    experiences = []

    for experience in Experience.objects.all():
        startMonth = experience.startDate.month
        date = months[startMonth - 1] + " " + str(experience.startDate.year)

        if experience.endDate != None:
            endMonth = experience.endDate.month
            date += (" –– " + months[startMonth - 1] + " " + str(experience.endDate.year))
       
        location = (experience.city + ", " + experience.state)

        # footer = months[experience.date]
        experiences.append({
            'image': experience.image,
            'title': experience.title,
            'content': experience.content,
            'position': experience.position,
            'date': date,
            'location': location
        })

    context = {"experiences":experiences, "title": "Experience"}

    return render(request, 'portfolio_web/experience.html', context)


def education(request):
    return render(request, 'portfolio_web/education.html', {"title": "Education"})


def contact(request):
    return render(request, 'portfolio_web/contact.html', {"title": "Contact Me"})
