import { Controller, Get, Query } from '@nestjs/common'
import { FinancialOverviewService } from './financialOverview.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { FinancialOverviewDto } from './dto/financialOverviewDto'

@ApiTags('Financial overview')
@Controller({
  path: 'financial-overview',
  version: ['1'],
})
export class FinancialOverviewController {
  constructor(
    private readonly financialOverviewService: FinancialOverviewService,
  ) {}

  @Get()
  @Documentation({
    summary: 'Get financial overview, to pre-fill tax return fields',
    response: {
      status: 200,
      type: FinancialOverviewDto,
    },
    request: {
      query: {
        nationalId: {
          type: 'string',
          description:
            'National ID of the logged-in user. Will be retrieved from token when authentication is implemented.',
          required: true,
        },
      },
    },
  })
  getFinancialOverviewByNationalId(
    @Query('nationalId') nationalId: string,
  ): Promise<FinancialOverviewDto> {
    return this.financialOverviewService.getFinancialOverviewByNationalId(
      nationalId,
    )
  }
}
