from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100, unique=True)
    sold = models.BooleanField(default=False)
    year = models.PositiveSmallIntegerField(null=True)
    color = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.vin


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveIntegerField(unique=True)


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=13)


class Sale(models.Model):
    price = models.PositiveIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.CASCADE
    )

    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE
    )
