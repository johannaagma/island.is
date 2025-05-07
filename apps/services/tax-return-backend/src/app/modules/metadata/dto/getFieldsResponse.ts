import { ApiProperty } from '@nestjs/swagger'
import { FieldDto } from './fieldDto'

export class GetFieldsReponse {
  @ApiProperty({
    description: 'Fields data',
    type: [FieldDto],
  })
  data!: FieldDto[]
}
