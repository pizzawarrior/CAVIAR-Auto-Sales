from django.db import models
from django.urls import reverse

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100, unique=True)
    sold = models.BooleanField(null=False)


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveIntegerField(unique=True)


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone_number = models.PositiveBigIntegerField()


class Sale(models.Model):
    price = models.PositiveIntegerField()
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.CASCADE
    )

    # def get_api_url(self):
    #     return reverse("api_automobile", kwargs={"vin": self.vin})


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
