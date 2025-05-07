import { Injectable } from '@nestjs/common'
import { IndividualApi } from '../../gen/fetch/apis'
import { Individual } from './nationalRegistryBackendApiClient.types'

@Injectable()
export class NationalRegistryBackendApiClient {
  constructor(private readonly individualApi: IndividualApi) {}

  async getIndividual(nationalId: string): Promise<Individual> {
    const res = await this.individualApi.individualControllerGetIndividual({
      nationalId,
    })
    const individual = res.data

    if (!individual) {
      throw new Error('Individual not found')
    }

    return {
      nationalId: individual.nationalId,
      name: individual.name,
      address: individual.address,
      postalCode: individual.postalCode,
      city: individual.city,
      email: individual.email,
      phone: individual.phone,
    }
  }
}
