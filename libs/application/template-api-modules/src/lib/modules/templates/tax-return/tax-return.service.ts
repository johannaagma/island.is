import { Injectable } from '@nestjs/common'
import { ApplicationTypes } from '@island.is/application/types'
import { BaseTemplateApiService } from '../../base-template-api.service'

@Injectable()
export class TaxReturnService extends BaseTemplateApiService {
  constructor() {
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
