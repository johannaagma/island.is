import { Injectable } from '@nestjs/common'
import {
  FinancialOverviewApi,
  MetadataApi,
  TaxReturnApi,
} from '../../gen/fetch/apis'

@Injectable()
export class TaxReturnClient {
  constructor(
    private readonly taxReturnApi: TaxReturnApi,
    private readonly financialOverviewApi: FinancialOverviewApi,
    private readonly metadataApi: MetadataApi,
  ) {}

  async getFinancialOverview(): Promise<any> {
    //TODO map result
    return await this.financialOverviewApi.financialOverviewControllerGetFinancialOverviewByNationalId(
      {
        nationalId: '1203894569', // TODO use logged in users nationalId?
      },
    )
  }
}
