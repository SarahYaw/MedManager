from django.db import models;

class Medication(models.Model):
    name = models.CharField(max_length=30)
    dosage = models.CharField(max_length=30, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    morning = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=2)
    afternoon = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=2)
    evening = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=2)
    provider = models.CharField(max_length=30)
    refilled = models.DateField()
    quantity = models.IntegerField()