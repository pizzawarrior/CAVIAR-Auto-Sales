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
    properties = ["first_name", "last_name", "employee_id"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["date_time", "reason", "status", "id",
                  "vin", "customer", "technician", "automobile"]
    encoders = {
        "technician": TechnicianEncoder(),
        "automobile": AutoVOEncoder()
    }
