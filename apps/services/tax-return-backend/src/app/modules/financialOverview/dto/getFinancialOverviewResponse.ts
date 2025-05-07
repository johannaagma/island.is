import { ApiPropertyOptional } from '@nestjs/swagger'
import { FinancialOverviewDto } from './financialOverviewDto'

export class GetFinancialOverviewResponse {
  @ApiPropertyOptional({
    description: 'Financial overview data',
    type: FinancialOverviewDto,
  })
  data?: FinancialOverviewDto
}
