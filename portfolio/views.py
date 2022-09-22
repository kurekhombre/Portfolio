from django.shortcuts import render
from .models import Project


# Create your views here.
def index(request):
    last_projects = Project.objects.all().order_by('-added')[:3]
    return render(request, 'portfolio/index.html', {
      'last_projects': last_projects
    })


def about(request):
    return render(request, 'portfolio/about.html')


def projects(request):
    projects = Project.objects.all()
    return render(request, 'portfolio/projects.html', {
      'projects': projects
    })
