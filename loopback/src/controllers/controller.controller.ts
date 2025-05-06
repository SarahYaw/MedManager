import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Medication} from '../models';
import {MedicationRepository} from '../repositories';

export class ControllerController {
  constructor(
    @repository(MedicationRepository)
    public medicationRepository : MedicationRepository,
  ) {}

  @post('/api/create')
  @response(200, {
    description: 'Medication model instance',
    content: {'application/json': {schema: getModelSchemaRef(Medication)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medication, {
            title: 'NewMedication',
            exclude: ['id'],
          }),
        },
      },
    })
    medication: Omit<Medication, 'id'>,
  ): Promise<Medication> {
    return this.medicationRepository.create(medication);
  }

  @get('/api/count')
  @response(200, {
    description: 'Medication model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Medication) where?: Where<Medication>,
  ): Promise<Count> {
    return this.medicationRepository.count(where);
  }

  @get('/api/read')
  @response(200, {
    description: 'Array of Medication model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Medication, {includeRelations: true}),
        },
      },
    },
  })
  async read(): Promise<Medication[]> {
    return this.medicationRepository.find();
  }

  @get('/api/find')
  @response(200, {
    description: 'Array of Medication model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Medication, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Medication) filter?: Filter<Medication>,
  ): Promise<Medication[]> {
    return this.medicationRepository.find(filter);
  }

  @patch('/api/updateall')
  @response(200, {
    description: 'Medication PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medication, {partial: true}),
        },
      },
    })
    medication: Medication,
    @param.where(Medication) where?: Where<Medication>,
  ): Promise<Count> {
    return this.medicationRepository.updateAll(medication, where);
  }

  @get('/api/{id}')
  @response(200, {
    description: 'Medication model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Medication, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Medication, {exclude: 'where'}) filter?: FilterExcludingWhere<Medication>
  ): Promise<Medication> {
    return this.medicationRepository.findById(id, filter);
  }

  @patch('/api/update/{id}')
  @response(204, {
    description: 'Medication PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medication, {partial: true}),
        },
      },
    })
    medication: Medication,
  ): Promise<void> {
    await this.medicationRepository.updateById(id, medication);
  }

  @put('/api/edit/{id}')
  @response(204, {
    description: 'Medication PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() medication: Medication,
  ): Promise<void> {
    await this.medicationRepository.replaceById(id, medication);
  }

  @del('/api/delete/{id}')
  @response(204, {
    description: 'Medication DELETE success',
  })
  async deleteById(@param.path.string('id') id: string,): Promise<void> {
    await this.medicationRepository.deleteById(id);
  }
}
