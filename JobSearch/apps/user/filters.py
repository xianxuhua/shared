from django_filters.rest_framework import FilterSet
from django_filters import NumberFilter, CharFilter
from .models import User


class UserFilter(FilterSet):
    max_age = NumberFilter(field_name='age', lookup_expr='lt')

    class Meta:
        model = User
        fields = ['max_age']