import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { NoContentException } from '@island.is/nest/problem'
import { FinancialOverview } from './model/financialOverview'
import { FinancialOverviewEntry } from './model/financialOverviewEntry'
import { Field } from '../metadata/model/field'

@Injectable()
export class FinancialOverviewService {
  constructor(
    @InjectModel(FinancialOverview)
    private financialOverviewModel: typeof FinancialOverview,
  ) {}

  async getFinancialOverviewByNationalId(
    nationalId: string,
  ): Promise<FinancialOverview | null> {
    const financialOverview = await this.financialOverviewModel.findOne({
      where: { nationalId },
      include: [
        {
          model: FinancialOverviewEntry,
          attributes: {
            exclude: [
              'id',
              'financialOverviewId',
              'financialOverview',
              'fieldId',
              'created',
              'modified',
            ],
          },
          include: [
            {
              model: Field,
              attributes: {
                exclude: ['id', 'sectionId', 'created', 'modified'],
              },
            },
          ],
        },
      ],
    })

    if (!financialOverview) {
      throw new NoContentException()
    }

    return financialOverview
  }
}
