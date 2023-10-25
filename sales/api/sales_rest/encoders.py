from common.json import ModelEncoder
from .models import AutomobileVO, Salesperson, Sale, Customer


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        'vin',
        'sold',
    ]

class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        'id',
        'first_name',
        'last_name',
        'employee_id',
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        'id',
        'first_name',
        'last_name',
        'address',
        'phone_number',
    ]

class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        'id',
        'price',
        'automobile',
        'customer',
        'salesperson'
    ]
    encoders = {
        'automobile': AutomobileVOEncoder(),
        'customer': CustomerEncoder(),
        'salesperson': SalespersonEncoder()
    }
