from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import UserRegisterForm

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Redirect to a home page or another appropriate page
    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})
