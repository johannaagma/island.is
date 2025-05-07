import { Injectable } from '@nestjs/common'
import { ApplicationTypes } from '@island.is/application/types'
import { BaseTemplateApiService } from '../../base-template-api.service'
import { TaxReturnClient } from '@island.is/clients/tax-return'
import { NationalRegistryBackendApiClient } from '@island.is/clients/national-registry-backend-api'
import { TemplateApiModuleActionProps } from '../../../types'

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

  async completeApplication({ application }: TemplateApiModuleActionProps) {
    this.taxReturnClient.submitTaxReturn('1203894569', {
      id: application.id,
      entries: [
        //TODO add fields from answers
        {
          fieldNumber: 21,
          data: { name: 'Norðurljós Software ehf' },
          amount: 9360000,
        },
      ],
    })
  }
}
