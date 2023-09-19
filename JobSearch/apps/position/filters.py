from django_filters.filters import CharFilter, NumberFilter
from django_filters.rest_framework import FilterSet
from .models import Position


class PositionFilter(FilterSet):
    name = CharFilter(field_name="name", lookup_expr="contains")
    min_salary = NumberFilter(field_name="min_salary", lookup_expr="gte")
    max_salary = NumberFilter(field_name="max_salary", lookup_expr="lte")
    min_num = NumberFilter(field_name="enterprise__worker_num", lookup_expr="gte")
    max_num = NumberFilter(field_name="enterprise__worker_num", lookup_expr="lte")
    enterprise__address = CharFilter(field_name="enterprise__address", lookup_expr="contains")
    enterprise = NumberFilter(field_name="enterprise")
    work_kind = CharFilter(field_name="work_kind")

    class Meta:
        model = Position
        fields = ["name", "min_salary", "max_salary", "min_num", "max_num", "category", "edu_require",
                  "enterprise__finance", "enterprise__address", "work_kind"]
