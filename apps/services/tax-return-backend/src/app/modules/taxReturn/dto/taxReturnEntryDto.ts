import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class TaxReturnEntryDto {
  @ApiProperty({
    description: 'Tax return section number for field',
    example: '2.3',
  })
  fieldSectionNumber!: string

  @ApiProperty({
    description: 'Tax return section name for field',
    example:
      'Lífeyrisgreiðslur. Greiðslur frá Tryggingastofnun. Aðrar bótagreiðslur, styrkir o.fl.',
  })
  fieldSectionName!: string

  @ApiProperty({
    description: 'Tax return field number (reitur)',
    example: 131,
  })
  fieldNumber!: number

  @ApiProperty({
    description: 'Tax return field name',
    example: 'Starfsmenntastyrkur',
  })
  fieldName?: string

  @ApiPropertyOptional({
    description: 'Data object for this field entry',
    example: { sourceName: 'VR' },
  })
  data?: Record<string, unknown>

  @ApiProperty({
    description: 'Amount for this field entry',
    example: 1000000,
  })
  amount!: number
}
