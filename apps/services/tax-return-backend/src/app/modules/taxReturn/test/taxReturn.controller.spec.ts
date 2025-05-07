import { HttpStatus, Type } from '@nestjs/common'
import { getConnectionToken } from '@nestjs/sequelize'
import assert from 'assert'
import { Sequelize } from 'sequelize-typescript'
import request, { SuperTest, Test } from 'supertest'
import { createCurrentUser } from '@island.is/testing/fixtures'
import { TestApp, setupApp, truncate } from '@island.is/testing/nest'
import { FixtureFactory } from '../../../../../test/fixtureFactory'
import { SequelizeConfigService } from '../../../../sequelizeConfig.service'
import { AppModule } from '../../../app.module'
import faker from 'faker'

const currentUser = createCurrentUser()

describe('TaxReturnController', () => {
  let app: TestApp
  let server: SuperTest<Test>
  let fixtureFactory: FixtureFactory
  let sequelize: Sequelize

  beforeAll(async () => {
    app = await setupApp({
      AppModule,
      SequelizeConfigService,
      user: currentUser,
    })

    fixtureFactory = new FixtureFactory(app)
    sequelize = await app.resolve(getConnectionToken() as Type<Sequelize>)
    server = request(app.getHttpServer())
  })

  afterEach(async () => {
    await truncate(sequelize)
  })

  afterAll(async () => {
    await app.cleanUp()
  })

  describe('GET /tax-return/{id}', () => {
    it('should return tax return', async () => {
      const taxReturn = await fixtureFactory.createTaxReturn()
      assert(taxReturn)

      const result = await server.get(`/v1/programs/${taxReturn.id}`)

      expect(result.status).toBe(200)
    })

    it('should not find tax return', async () => {
      const randomId = faker.datatype.uuid()

      const result = await server.get(`/v1/programs/${randomId}`)

      expect(result.status).toBe(HttpStatus.NO_CONTENT)
    })
  })
})
