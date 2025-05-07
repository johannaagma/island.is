import { Injectable } from '@nestjs/common'
import { ApplicationTypes } from '@island.is/application/types'
import { BaseTemplateApiService } from '../../base-template-api.service'
import { TaxReturnClient } from '@island.is/clients/tax-return'
import { NationalRegistryBackendApiClient } from '@island.is/clients/national-registry-backend-api'
import { TemplateApiModuleActionProps } from '../../../types'
import { Entry } from './types/financialOverview'
import {
  carCategories,
  domesticPropertyCategories,
  domesticPropertyLoansCategories,
  otherDebtsCategories,
  otherIncomeCategories,
  salaryIncomeCategories,
  supportingIncomeCategories,
} from './constants/EntryCategories'
import { groupOtherDebtsById } from './utils'

@Injectable()
export class TaxReturnService extends BaseTemplateApiService {
  constructor(
    private readonly taxReturnClient: TaxReturnClient,
    private readonly nationalRegistryClient: NationalRegistryBackendApiClient,
  ) {
    super(ApplicationTypes.TAX_RETURN)
  }

  async getFinancialOverview() {
    const results = await this.taxReturnClient.getFinancialOverview()
    if (!results) {
      throw new Error('No results found')
    }

    const salaryIncome = results.entries.filter((x: Entry) =>
      salaryIncomeCategories.includes(x.fieldNumber),
    )

    const otherIncome = results.entries.filter((x: Entry) =>
      otherIncomeCategories.includes(x.fieldNumber),
    )

    const supportingIncome = results.entries.filter((x: Entry) =>
      supportingIncomeCategories.includes(x.fieldNumber),
    )

    const domesticProperties = results.entries.filter((x: Entry) =>
      domesticPropertyCategories.includes(x.fieldNumber),
    )
    const domesticPropertyLoans = results.entries.filter((x: Entry) =>
      domesticPropertyLoansCategories.includes(x.fieldNumber),
    )
    const cars = results.entries.filter((x: Entry) =>
      carCategories.includes(x.fieldNumber),
    )
    const otherDebts = results.entries.filter((x: Entry) =>
      otherDebtsCategories.includes(x.fieldNumber),
    )

    const otherDebtsGrouped = groupOtherDebtsById(otherDebts)

    return {
      salaryIncome,
      otherIncome,
      supportingIncome,
      domesticProperties,
      cars,
      otherDebts: otherDebtsGrouped,
      domesticPropertyLoans,
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
