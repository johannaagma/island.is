import { ApiProperty } from '@nestjs/swagger'
import { PageInfoDto } from '@island.is/nest/pagination'
import { TaxReturn } from '../model/taxReturn'

export class TaxReturnsResponse {
  @ApiProperty({
    description: 'Total number of items in result (for pagination)',
  })
  totalCount!: number

  @ApiProperty({
    description: 'Tax returns data',
    type: [TaxReturn],
  })
  data!: TaxReturn[]

  @ApiProperty({
    description: 'Page information (for pagination)',
  })
  pageInfo!: PageInfoDto
}
