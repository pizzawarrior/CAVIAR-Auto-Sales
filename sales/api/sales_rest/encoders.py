from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Sale, Customer

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        'vin',
        'sold',
        'href'
    ]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        'first_name',
        'last_name',
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        'first_name',
        'last_name',
        'address',
        'phone_number',
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        'price',
        'automobile',
    ]
    encoders = {
        'automobile': AutomobileVOEncoder(),
    }
