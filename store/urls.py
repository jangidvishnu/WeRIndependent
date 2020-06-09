from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('tracker/', views.tracker, name="tracker"),
    path('about/', views.about, name="about"),
    path('contact/', views.contact, name="contact"),
    path('product/pr<int:id>', views.quickView, name="quickView"),
    path('checkout/',views.checkout,name="checkout")
]
