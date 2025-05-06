import { Controller, Get, Param, Query } from '@nestjs/common'
import { MetadataService } from './metadata.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { Field } from './model/field'
// import { CurrentUser, User } from '@island.is/auth-nest-tools'

//TODOx ætti að vera IdsUserGuard og nota nationalId úr token ekki param
// @UseGuards(IdsUserGuard, ScopesGuard)
@ApiTags('Metadata')
@Controller({
  path: 'metadata',
  version: ['1'],
})
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Get('fields')
  @Documentation({
    description: 'Get fields to display in the tax return',
    response: {
      status: 200,
      type: [Field], //TODO wrapper utan um result
    },
    request: {
      query: {
        year: {
          type: 'string',
          description: 'Tax return year for which to fetch section fields',
          required: true,
        },
      },
    },
  })
  getFields(@Query('year') year: string): Promise<Field[]> {
    return this.metadataService.getFields(
      year,
      // user,
    )
  }
}
