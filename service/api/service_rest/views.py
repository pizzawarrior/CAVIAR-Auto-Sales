from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Appointment, Technician, AutomobileVO


class AutoVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["first_name", "last_name", "employee_id", "id"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "id",
                  "vin", "customer", "technician", "automobile"]
    encoders = {
        "technician": TechnicianEncoder(),
        "automobile": AutoVOEncoder()
    }


@require_http_methods(["GET", "POST"])
def get_or_create_technician(request):
    pass


def delete_technician(request, id):
    pass


@require_http_methods(["GET", "POST"])
def get_or_create_appointment(request):
    pass


def delete_appointment(request, id):
    pass


def set_appointment_cancelled(request, id):
    pass


def set_appointment_done(request, id):
    pass
