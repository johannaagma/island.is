import { Controller, Get, Query } from '@nestjs/common'
import { IndividualService } from './individual.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { GetIndividualResponse } from './dto/getIndividualResponse'

@ApiTags('Individual')
@Controller({
  path: 'individual',
  version: ['1'],
})
export class IndividualController {
  constructor(private readonly individualService: IndividualService) {}

  @Get()
  @Documentation({
    summary: 'Get information about individual',
    response: {
      status: 200,
      type: GetIndividualResponse,
    },
    request: {
      query: {
        nationalId: {
          type: 'string',
          description:
            'National ID of the logged-in user. Will be retrieved from token when authentication is implemented.',
          required: true,
        },
      },
    },
  })
  getFields(
    @Query('nationalId') nationalId: string,
  ): Promise<GetIndividualResponse> {
    return this.individualService.getIndividual(nationalId)
  }
}
