import {Entity, model, property} from '@loopback/repository';

@model()
export class Medication extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    required: false,
  })
  id?: string;

  @property({
    type: 'string',
    generated: false,
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  dosage?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
  })
  morning?: string;

  @property({
    type: 'string',
  })
  afternoon?: string;

  @property({
    type: 'string',
  })
  evening?: string;

  @property({
    type: 'string',
  })
  provider?: string;

  @property({
    type: 'date',
    required: true,
  })
  refilled: string;

  @property({
    type: 'string',
  })
  quantity?: string;


  constructor(data?: Partial<Medication>) {
    super(data);
  }
}

export interface MedicationRelations {
  // describe navigational properties here
}

export type MedicationWithRelations = Medication & MedicationRelations;
