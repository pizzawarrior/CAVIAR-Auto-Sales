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
                  "vin", "customer", "technician"]
    encoders = {
        "technician": TechnicianEncoder()
    }


@require_http_methods(["GET", "POST"])
def get_or_create_technician(request):
    if request.method == 'GET':
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )


def delete_technician(request, id):
    try:
        count, _ = Technician.objects.get(employee_id=id).delete()
        return JsonResponse({"deleted": count > 0})
    except Technician.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid technician"},
            status=400,
        )


@require_http_methods(["GET", "POST"])
def get_or_create_appointment(request):
    if request.method == 'GET':
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)
        try:
            employee = content["technician"]
            technician = Technician.objects.get(employee_id=employee)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician"},
                status=400,
            )

        auto_vin = content["vin"]
        automobile = AutomobileVO.objects.filter(vin=auto_vin)

        if len(automobile) > 0:
            content["automobile"] = automobile[0]

        appointment = Appointment.objects.create(**content)

        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


def delete_appointment(request, id):
    try:
        count, _ = Appointment.objects.get(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid appointment"},
            status=400,
        )


def set_appointment_cancelled(request, id):
    try:
        Appointment.objects.filter(id=id).update(status='canceled')
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )

    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid appointment"},
            status=400,
        )


def set_appointment_done(request, id):
    try:
        Appointment.objects.filter(id=id).update(status='finished')
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )

    except Appointment.DoesNotExist:
        return JsonResponse(
            {"message": "Invalid appointment"},
            status=400,
        )
