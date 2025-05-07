import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class FieldDto {
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

  @ApiPropertyOptional({
    description: 'Tax return field name',
    example: 'Starfsmenntastyrkur',
  })
  fieldName?: string

  @ApiProperty({
    description: 'What year this field belongs to',
    example: '2025',
  })
  year!: string

  @ApiProperty({
    description:
      'Order of field, to make sure fields are sorted correctly in the UI for the tax return',
    example: 1,
  })
  order!: number

  @ApiPropertyOptional({
    description:
      'Data schema for this field - will not be implemented / used for now',
    example: '{}',
  })
  entryDataSchema?: Record<string, unknown>

  @ApiProperty({
    description:
      "Indicates if this field's entry can be edited in the tax return",
    example: true,
  })
  canEditEntry!: boolean

  @ApiProperty({
    description:
      'Indicates if a new entry can be added for this field in the tax return',
    example: true,
  })
  canAddEntry!: boolean
}
