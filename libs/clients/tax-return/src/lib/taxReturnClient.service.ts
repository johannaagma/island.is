import { Injectable } from '@nestjs/common'
import {
  FinancialOverviewApi,
  MetadataApi,
  TaxReturnApi,
} from '../../gen/fetch/apis'
import { TaxReturn } from './taxReturnClient.types'

@Injectable()
export class TaxReturnClient {
  constructor(
    private readonly taxReturnApi: TaxReturnApi,
    private readonly financialOverviewApi: FinancialOverviewApi,
    private readonly metadataApi: MetadataApi,
  ) {}

  async getTaxReturns(nationalId: string): Promise<TaxReturn[]> {
    return (
      await this.taxReturnApi.taxReturnControllerGetTaxReturns({
        nationalId,
      })
    ).data.map((x) => ({
      id: x.id,
      year: x.year,
      entries: [],
    }))
  }

  async getFinancialOverview(nationalId: string): Promise<any> {
    //TODO map result
    return await this.financialOverviewApi.financialOverviewControllerGetFinancialOverviewByNationalId(
      { nationalId },
    )
  }

  async submitTaxReturn(nationalId: string, taxReturn: TaxReturn) {
    await this.taxReturnApi.taxReturnControllerCreateTaxReturn({
      createTaxReturnDto: {
        id: taxReturn.id,
        nationalId,
        entries: taxReturn.entries.map((x) => ({
          fieldNumber: x.fieldNumber,
          data: x.data,
          amount: x.amount,
        })),
      },
    })
  }
}
