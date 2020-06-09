from django.db import models
from django.utils import timezone


# Create your models here.
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=50, default="")
    description = models.CharField(max_length=300, default="")
    category = models.CharField(max_length=20, default="")
    sub_category = models.CharField(max_length=20, default="")
    price = models.IntegerField(default=0)
    pub_date = models.DateField(default=timezone.now())
    product_image = models.ImageField(upload_to="store/img", default="")

    def __str__(self):
        return self.product_name


class Cart(models.Model):
    cart_json = models.CharField(max_length=5000, default="")