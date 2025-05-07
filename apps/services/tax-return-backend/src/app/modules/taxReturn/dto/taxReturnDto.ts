import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { TaxReturnEntryDto } from './taxReturnEntryDto'

export class TaxReturnDto {
  @ApiProperty({
    description:
      'Tax return ID, should be the same application GUID that is used in island.is application system',
    example: '00000000-0000-0000-0000-000000000000',
    type: String,
  })
  id!: string

  @ApiProperty({
    description: 'National ID of the user this tax return belongs to',
    example: '123456-7890',
  })
  nationalId!: string

  @ApiProperty({
    description: 'What year this tax return is for',
    example: '2025',
  })
  year!: string

  @ApiPropertyOptional({
    description: 'Entries connected to this tax return',
    type: [TaxReturnEntryDto],
  })
  entries?: TaxReturnEntryDto[]
}
