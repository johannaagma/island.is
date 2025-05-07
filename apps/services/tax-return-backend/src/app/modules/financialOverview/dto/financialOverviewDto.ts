import { ApiProperty } from '@nestjs/swagger'
import { FinancialOverviewEntryDto } from './financialOverviewEntryDto'

export class FinancialOverviewDto {
  @ApiProperty({
    description: 'Financial overview ID',
    example: '00000000-0000-0000-0000-000000000000',
    type: String,
  })
  id!: string

  @ApiProperty({
    description: 'National ID of the user this financial overview belongs to',
    example: '123456-7890',
  })
  nationalId!: string

  @ApiProperty({
    description: 'What year this financial overview is for',
    example: '2025',
  })
  year!: string

  @ApiProperty({
    description: 'Entries connected to this financial overview',
    type: [FinancialOverviewEntryDto],
  })
  entries!: FinancialOverviewEntryDto[]
}
