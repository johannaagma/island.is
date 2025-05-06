import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsArray, IsNumber, IsObject, IsString, IsUUID } from 'class-validator'

class CreateTaxReturnEntryDto {
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

export class CreateTaxReturnDto {
  @IsUUID()
  @ApiProperty({
    description:
      'Tax return ID, should be the same application GUID that is used in island.is application system',
    example: '00000000-0000-0000-0000-000000000000',
  })
  id!: string

  @IsString()
  @ApiProperty({
    description:
      'Logged in user national id - should be fetched from auth token when authentication is implemented',
    example: '1203894569',
  })
  nationalId!: string

  @IsArray()
  @ApiProperty({
    description: 'List of entries',
    type: [CreateTaxReturnEntryDto],
  })
  entries!: CreateTaxReturnEntryDto[]
}
