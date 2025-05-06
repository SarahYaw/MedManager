import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceDataSource} from '../datasources';
import {Medication, MedicationRelations} from '../models';

export class MedicationRepository extends DefaultCrudRepository<
  Medication,
  typeof Medication.prototype.name,
  MedicationRelations
> {
  constructor(
    @inject('datasources.datasource') dataSource: DatasourceDataSource,
  ) {
    super(Medication, dataSource);
  }
}
