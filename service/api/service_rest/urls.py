from django.urls import path
from .views import (
    get_or_create_technician, get_or_create_appointment, delete_technician, delete_appointment, set_appointment_cancelled, set_appointment_done
)


urlpatterns = [
    path('technicians/', get_or_create_technician,
         name='get_or_create_technician'),
    path('technicians/<int:id>/', delete_technician, name='delete_technician'),
    path('appointments/', get_or_create_appointment,
         name='get_or_create_appointment'),
    path('appointments/<int:id>/', delete_appointment, name='delete_appointment'),
    path('appointments/<int:id>/cancel/', set_appointment_cancelled,
         name='set_appointment_cancelled'),
    path('appointments/<int:id>/finish/',
         set_appointment_done, name='set_appointment_done')
]
