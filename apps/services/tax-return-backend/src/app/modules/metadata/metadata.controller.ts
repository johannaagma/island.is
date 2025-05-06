import { Controller, Get, Query } from '@nestjs/common'
import { MetadataService } from './metadata.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { FieldsReponse } from './dto/fieldsResponse'

@ApiTags('Metadata')
@Controller({
  path: 'metadata',
  version: ['1'],
})
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}

  @Get('fields')
  @Documentation({
    summary: 'Get fields to display in the tax return',
    response: {
      status: 200,
      type: FieldsReponse,
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
  getFields(@Query('year') year: string): Promise<FieldsReponse> {
    return this.metadataService.getFields(year)
  }
}
