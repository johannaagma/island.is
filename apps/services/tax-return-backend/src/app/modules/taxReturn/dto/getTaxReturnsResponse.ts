import { ApiProperty } from '@nestjs/swagger'
import { TaxReturnDto } from './taxReturnDto'

export class GetTaxReturnsResponse {
  @ApiProperty({
    description: 'Tax returns data',
    type: [TaxReturnDto],
  })
  data!: TaxReturnDto[]
}
