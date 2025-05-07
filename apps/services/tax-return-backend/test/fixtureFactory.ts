import { getModelToken } from '@nestjs/sequelize'
import faker from 'faker'
import { Model } from 'sequelize'
import { createNationalId } from '@island.is/testing/fixtures'
import { TestApp } from '@island.is/testing/nest'
import { TaxReturn } from '../src/app/modules/taxReturn/model/taxReturn'

export class FixtureFactory {
  constructor(private app: TestApp) {}

  get<T extends new () => Model>(model: T): T {
    return this.app.get(getModelToken(model))
  }

  async createTaxReturn() {
    return this.get(TaxReturn).create({
      id: faker.datatype.uuid(),
      nationalId: createNationalId('person'),
      year: new Date().getFullYear(),
      entries: [],
    })
  }
}
