import { ApiPropertyOptional } from '@nestjs/swagger'
import { IndividualDto } from './individualDto'

export class GetIndividualResponse {
  @ApiPropertyOptional({
    description: 'Individual data',
    type: IndividualDto,
  })
  data?: IndividualDto
}
