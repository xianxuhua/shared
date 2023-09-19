from django_filters.filters import CharFilter
from django_filters.rest_framework import FilterSet
from .models import Policy


class PolicyFilter(FilterSet):
    address = CharFilter(field_name="address", lookup_expr="contains")

    class Meta:
        model = Policy
        fields = ["address"]
