from django.shortcuts import render
from django.http import HttpResponse
import json
from .models import Product, Cart
from math import ceil


def index(request):
    categoryset = Product.objects.values('category', 'id')
    categoryset = {item['category'] for item in categoryset}
    categoryset = sorted(categoryset)
    allProducts = []
    cart_json = Cart.objects.all()[0]
    cart_json = cart_json.cart_json

    for cats in categoryset:
        products = Product.objects.filter(category=cats)
        noofitems = len(products)
        noofslides = noofitems // 4 + ceil(noofitems / 4 - noofitems // 4)
        allProducts.append([products, range(1, noofslides), noofslides])
    params = {"allProducts": allProducts, "categories": categoryset, 'cart_json': cart_json}
    return render(request, "store/index.html", params)


def tracker(request):
    return render(request, "store/tracker.html")


def about(request):
    return render(request, "store/about.html")


def contact(request):
    return render(request, "store/contact.html")


def quickView(request, id):
    product = Product.objects.filter(id=id)
    params = {'product': product[0]}
    return render(request, "store/product.html", params)


def checkout(request):
    return render(request, "store/checkout.html")
