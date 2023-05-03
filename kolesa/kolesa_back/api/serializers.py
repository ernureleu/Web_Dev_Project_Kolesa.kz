from rest_framework import serializers
from api.models import Category, Car, UserInfo, Favorite
from django.contrib.auth.models import User


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    imageUrl = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(**validated_data)
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'is_superuser', 'is_staff')


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('__all__')


class FavoriteSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    cars = CarSerializer(many=True)
    class Meta:
        model = Favorite
        fields = ('__all__')





