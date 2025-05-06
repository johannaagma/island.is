import { ModeOfDelivery, ApplicationTypes } from '@island.is/university-gateway'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsArray,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator'

export class CreateTaxReturnDto {
  @IsUUID()
  @ApiProperty({
    description:
      'Application ID, should be the same application GUID that is used in island.is application system',
    example: '00000000-0000-0000-0000-000000000000',
  })
  applicationId!: string

  //TODO add fields
}
