from django_filters.filters import CharFilter, NumberFilter
from django_filters.rest_framework import FilterSet
from .models import Enterprise, Lecture


class EnterpriseFilter(FilterSet):
    name = CharFilter(field_name="name", lookup_expr="contains")
    min_worker_num = NumberFilter(field_name="worker_num", lookup_expr="gte")
    max_worker_num = NumberFilter(field_name="worker_num", lookup_expr="lte")
    address = CharFilter(field_name="address", lookup_expr="contains")
    add_time = CharFilter(field_name="add_time", lookup_expr="contains")

    class Meta:
        model = Enterprise
        fields = ["name", "min_worker_num", "max_worker_num", "field", "finance", "address", "add_time"]


class LectureFilter(FilterSet):
    enterprise = NumberFilter(field_name="enterprise")
    enterprise_name = CharFilter(field_name="enterprise__name", lookup_expr="contains")
    date = CharFilter(field_name="date")

    class Meta:
        model = Lecture
        fields = ['enterprise_name', 'date']
