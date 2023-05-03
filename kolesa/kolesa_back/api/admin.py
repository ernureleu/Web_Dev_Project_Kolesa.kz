from django.contrib import admin

from api.models import Category, Car, Favorite

admin.site.register(Category)
admin.site.register(Car)
admin.site.register(Favorite)
