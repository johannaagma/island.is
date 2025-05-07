import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { FinancialOverview } from './model/financialOverview'
import { FinancialOverviewEntry } from './model/financialOverviewEntry'
import { Field } from '../metadata/model/field'
import { Section } from '../metadata/model/section'
import { GetFinancialOverviewResponse } from './dto/getFinancialOverviewResponse'

@Injectable()
export class FinancialOverviewService {
  constructor(
    @InjectModel(FinancialOverview)
    private financialOverviewModel: typeof FinancialOverview,
  ) {}

  async getFinancialOverviewByNationalId(
    nationalId: string,
  ): Promise<GetFinancialOverviewResponse> {
    const item = await this.financialOverviewModel.findOne({
      where: { nationalId },
      include: [
        {
          model: FinancialOverviewEntry,
          include: [
            {
              model: Field,
              include: [{ model: Section }],
            },
          ],
        },
      ],
    })

    if (!item) {
      throw new NotFoundException()
    }

    return {
      data: {
        id: item.id,
        nationalId: item.nationalId,
        year: item.year,
        entries: item.entries?.map((entry) => ({
          fieldSectionNumber: entry.field?.section?.sectionNumber || '',
          fieldSectionName: entry.field?.section?.sectionName || '',
          fieldNumber: entry.field?.fieldNumber || 0,
          fieldName: entry.field?.fieldName,
          data: entry.data,
          amount: entry.amount,
        })),
      },
    }
  }
}
