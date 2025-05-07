import { Injectable } from '@nestjs/common'
import { ApplicationTypes } from '@island.is/application/types'
import { BaseTemplateApiService } from '../../base-template-api.service'
import { TaxReturnClient } from '@island.is/clients/tax-return'
import { NationalRegistryBackendApiClient } from '@island.is/clients/national-registry-backend-api'

@Injectable()
export class TaxReturnService extends BaseTemplateApiService {
  constructor(
    private readonly taxReturnClient: TaxReturnClient,
    private readonly nationalRegistryClient: NationalRegistryBackendApiClient,
  ) {
    super(ApplicationTypes.TAX_RETURN)
  }

  async getApplicant() {
    return {
      id: 1337,
    }
  }

  async completeApplication() {
    return {
      id: 1337,
    }
  }
}
