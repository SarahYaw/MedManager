from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from djangoFiles.models import Medication

def index(request):
    meds = Medication.objects.order_by("-refilled")
    context = []
    for med in meds:
        context.append({    
            'id': med.id,
            'name': med.name,
            'dosage': med.dosage,
            'description': med.description,
            'morning': med.morning,
            'afternoon': med.afternoon,
            'evening': med.evening,
            'provider': med.provider,
            'refilled': (med.refilled.strftime("%m-%d-%Y") if med.refilled else None),
            'quantity': med.quantity,
        })
        print(med.name, med.dosage, med.refilled, med.quantity)
    return JsonResponse(context, safe=False)
def create(request):
    return HttpResponse("Hello, world. You're at the create.")
def edit(request, id):
    # Assuming you want to edit a medication with the given id
    return HttpResponse(f"Hello, world. You're at the edit {id}.")
def delete(request, id):
    return HttpResponse(f"Hello, world. You're at the delete {id}.")