import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class IndividualDto {
  @ApiProperty({
    description: 'National ID for individual',
    example: '1234567890',
  })
  nationalId!: string

  @ApiProperty({
    description: 'Full name for individual',
    example: 'Jón Jónsson',
  })
  name!: string

  @ApiProperty({
    description: 'Legal domicile address for individual',
    example: 'Platgata 1',
  })
  address!: string

  @ApiProperty({
    description: 'Legal domicile postal code for individual',
    example: '101',
  })
  postalCode!: string

  @ApiProperty({
    description: 'Legal domicile city for individual',
    example: 'Reykjavík',
  })
  city!: string

  @ApiPropertyOptional({
    description: 'Email for individual',
    example: 'mock@email.is',
  })
  email?: string

  @ApiPropertyOptional({
    description: 'Phone number for individual',
    example: '87654321',
  })
  phone?: string
}
