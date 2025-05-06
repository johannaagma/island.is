import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsArray, IsNumber, IsObject } from 'class-validator'

class UpdateTaxReturnEntryDto {
  @IsNumber()
  @ApiProperty({
    description: 'Tax return entry field number (reitur)',
    example: 131,
  })
  fieldNumber!: number

  @IsObject()
  @ApiPropertyOptional({
    description:
      'Tax return entry data object, any other relevant information about this entry, e.g. vehicle permno, property number.',
    example: { sourceName: 'VR' },
  })
  data?: Record<string, unknown>

  @IsNumber()
  @ApiProperty({
    description: 'Amount that should be added to the tax return field',
    example: 1000000,
  })
  amount!: number
}

export class UpdateTaxReturnDto {
  @IsArray()
  @ApiProperty({
    description: 'List of entries',
    type: [UpdateTaxReturnEntryDto],
  })
  entries!: UpdateTaxReturnEntryDto[]
}
