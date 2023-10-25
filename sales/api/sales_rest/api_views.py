from django.shortcuts import render
from .models import AutomobileVO, Salesperson, Customer, Sale
from .encoders import AutomobileVOEncoder, SalespersonEncoder, SaleEncoder, CustomerEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json


# LIST and CREATE a customer
@require_http_methods(['GET', 'POST'])
def api_list_customers(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
            safe=False
    )
    else:
        content = json.loads(request.body)
        try:
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"Error": "Not able to add customer"}
            )
            response.status_code=400
            return response


# DETAIL, UPDATE, and DELETE a customer
@require_http_methods(['GET', 'PUT', 'DELETE'])
def api_detail_customer(request, id):
    if request.method == 'GET':
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse(
                {"Error": "Customer ID does not exist"}
                )
            response.status_code=404
            return response

    elif request.method == 'DELETE':
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"Error": "Customer does not exist"})
            response.status_code=404
            return response

    else: # PUT
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=id)

            props = ["first_name", "last_name", "address", "phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
                customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"Error": "Customer does not exist"})
            response.status_code=404
            return response


# LIST and CREATE salespeople
@require_http_methods(['GET', 'POST'])
def api_list_salespeople(request):
    if request.method == 'GET':
        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder,
            safe=False
    )
    else:
        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"Error": "Not able to add salesperson"}
            )
            response.status_code=400
            return response


# DETAIL, UPDATE, and DELETE salespeople
@require_http_methods(['GET', 'PUT', 'DELETE'])
def api_detail_salespeople(request, id):
    if request.method == 'GET':
        try:
            salesperson = Salesperson.objects.get(id=id)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"Error": "Employee ID does not exist"}
                )
            response.status_code=404
            return response

    elif request.method == 'DELETE':
        try:
            salesperson = Salesperson.objects.get(id=id)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"Error": "Salesperson does not exist"})
            response.status_code=404
            return response

    else: # PUT
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.get(id=id)

            props = ["first_name", "last_name", "employee_id"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
                salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"Error": "Salesperson does not exist"})
            response.status_code=404
            return response


# LIST and CREATE SALES
# lists all sales showing the salesperson's name and employee ID,
# the customer's name, the automobile VIN, and the price of the sale.
@require_http_methods(['GET', 'POST'])
def api_list_sales(request):
    if request.method == 'GET':
        sales = Sale.objects.all()
        return JsonResponse(
            {'sales': sales},
            encoder=SaleEncoder,
            safe=False
        )

    else:
        content = json.loads(request.body)

        try:
            auto_vin = content['automobile']
            automobile = AutomobileVO.objects.get(vin=auto_vin)
            if automobile.sold == False:
                content['automobile'] = automobile

            else:
                response = JsonResponse(
                    {"Alert": "This vehicle is not available"}
                    )
                response.status_code=404
                return response

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"Error": "Invalid automobile ID"},
                status=404
            )

        try:
            customer_id = content['customer']
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

        except Customer.DoesNotExist:
            response = JsonResponse(
                {"Error": "Customer is not in our system"}
            )
            response.status_code=404
            return response

        try:
            employee_id = content['salesperson']
            salesperson = Salesperson.objects.get(employee_id=employee_id)
            content['salesperson'] = salesperson

        except Salesperson.DoesNotExist:
            response = JsonResponse(
                {"Error": "This salesperson does not exist"}
            )
            response.status_code=404
            return response

        AutomobileVO.objects.filter(vin=auto_vin).update(sold=True)
        new_sale = Sale.objects.create(**content)
        return JsonResponse(
            new_sale,
            encoder=SaleEncoder,
            safe=False
        )


# DETAIL, UPDATE, and DELETE A SALE
@require_http_methods(['GET', 'PUT', 'DELETE'])
def api_detail_sale(request, id):
    if request.method == 'GET':
        try:
            sale = Sale.objects.get(id=id)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )
        except Sale.DoesNotExist:
            response = JsonResponse(
                {"Error": "Sale ID does not exist"}
                )
            response.status_code=404
            return response

    elif request.method == 'DELETE':
        try:
            count, _ = Sale.objects.get(id=id).delete()
            return JsonResponse({'deleted': count > 0})
        except Sale.DoesNotExist:
            return JsonResponse(
                {"Error": "Record does not exist"},
                status=400
            )


    else: # PUT
        try:
            content = json.loads(request.body)
            sale = Sale.objects.get(id=id)
            props = ["price", "salesperson", "customer", "automobile"]
            for prop in props:
                if prop in content:
                    setattr(sale, prop, content[prop])
            sale.save()
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False
            )

        except Sale.DoesNotExist:
            response = JsonResponse(
                {"Error": "No record of sale"}
            )
            response.status_code=404
            return response
