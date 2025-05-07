import { ApiPropertyOptional } from '@nestjs/swagger'
import { TaxReturnDto } from './taxReturnDto'

export class GetTaxReturnResponse {
  @ApiPropertyOptional({
    description: 'Tax return data',
    type: TaxReturnDto,
  })
  data?: TaxReturnDto
}
