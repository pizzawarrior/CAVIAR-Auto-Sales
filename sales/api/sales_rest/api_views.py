from django.shortcuts import render
from .models import AutomobileVO, Salesperson, Customer, Sale
from .encoders import AutomobileVOEncoder, SalespersonEncoder, SaleEncoder, CustomerEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json


@require_http_methods(['GET', 'POST'])
def api_list_sales(request, automobile_vo_id=None):
    if request.method == 'GET':
        print(AutomobileVO.objects.all())
        if automobile_vo_id is not None:
            sales = Sale.objects.filter(automobile=automobile_vo_id)
        else:
            sales = Sale.objects.all()

        return JsonResponse(
            {'sales': sales},
            encoder=SaleEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        try:
            auto_href = f'/api/automobiles/{automobile_vo_id}'
            automobile = AutomobileVO.objects.get(href=auto_href)
            content['automobile'] = automobile

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid automobile ID'}
            )
        sales = Sale.objects.create(**content)
        return JsonResponse(
            sales,
            encoder=SaleEncoder,
            safe=False
        )
