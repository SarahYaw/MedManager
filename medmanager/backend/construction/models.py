from django.db import models;

class Medication(models.Model):
    name = models.CharField(max_length=30, required=True)
    dosage = models.CharField(max_length=30, required=False)
    description = models.TextField(required=False)
    morning = models.IntegerField(required=False)
    afternoon = models.IntegerField(required=False)
    evening = models.IntegerField(required=False)
    provider = models.CharField(max_length=30, required=False)
    refilled = models.DateField(required=True)
    quantity = models.IntegerField(required=False)