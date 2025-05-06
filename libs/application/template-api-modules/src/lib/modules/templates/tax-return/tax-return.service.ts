import { Injectable } from '@nestjs/common'
import { ApplicationTypes } from '@island.is/application/types'
import { BaseTemplateApiService } from '../../base-template-api.service'
import { TaxReturnClient } from '@island.is/clients/tax-return'

@Injectable()
export class TaxReturnService extends BaseTemplateApiService {
  constructor(private readonly taxReturnClient: TaxReturnClient) {
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
