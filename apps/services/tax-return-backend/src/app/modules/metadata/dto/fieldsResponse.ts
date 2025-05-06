import { ApiProperty } from '@nestjs/swagger'
import { Field } from '../model/field'

export class FieldsReponse {
  @ApiProperty({
    description: 'Fields data',
    type: [Field],
  })
  data!: Field[]
}
