from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200, unique=True)
    sold = models.BooleanField()


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.BigIntegerField()


class Appointment(models.Model):
    date_time = models.DateTimeField(auto_created=True)
    reason = models.TextField()
    status = models.CharField(
        max_length=200,
        choices=(
            ('scheduled', 'scheduled'),
            ('arrived', 'arrived'),
            ('in progress', 'in progress'),
            ('done', 'done')
        ),
        default='scheduled'
    )
    vin = models.CharField(max_length=250)
    customer = models.CharField(max_length=250)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )
