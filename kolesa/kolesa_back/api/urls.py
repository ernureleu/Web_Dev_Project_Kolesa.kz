from api import views
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token


urlpatterns = [
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/cars', views.car_by_category),
    path('cars/', views.car_list),
    path('cars/<int:car_id>', views.CarDetailsAPIView.as_view()),
    path('login/', obtain_jwt_token),
    path('favorite/<int:user_id>', views.favorite),
    path('add-to-favorite/<int:car_id>/', views.add_to_favorites),
    path('user_id/', views.get_user_id),
    path('remove-from-favorite/<int:car_id>/', views.remove_from_favorites),
]
