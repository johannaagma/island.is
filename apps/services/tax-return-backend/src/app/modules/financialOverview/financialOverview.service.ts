import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
// import type { User } from '@island.is/auth-nest-tools'
import { NoContentException } from '@island.is/nest/problem'
import { FinancialOverview } from './model/financialOverview'
import { FinancialOverviewEntry } from './model/financialOverviewEntry'

@Injectable()
export class FinancialOverviewService {
  constructor(
    @InjectModel(FinancialOverview)
    private financialOverviewModel: typeof FinancialOverview,
  ) {}

  async getMyFinancialOverview(
    nationalId: string,
    // user: User,
  ): Promise<FinancialOverview | null> {
    const financialOverview = await this.financialOverviewModel.findOne({
      where: { nationalId },
      include: [
        {
          model: FinancialOverviewEntry,
          attributes: {
            exclude: ['id', 'financialOverviewId', 'created', 'modified'],
          },
        },
      ],
    })

    if (!financialOverview) {
      throw new NoContentException()
    }

    return financialOverview
  }
}
