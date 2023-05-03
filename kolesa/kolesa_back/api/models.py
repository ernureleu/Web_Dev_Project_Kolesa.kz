from django.contrib.auth.models import User
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)
    imageUrl = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Car(models.Model):
    id = models.AutoField(primary_key=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=64, unique=True)
    price = models.FloatField(default=1)
    year = models.IntegerField(default=1)
    engine = models.FloatField(default=1)
    description = models.TextField(default='')
    imageUrl = models.CharField(max_length=255, default="")

    def __str__(self):
        return self.name


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    cars = models.ManyToManyField(Car)


class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=11)

