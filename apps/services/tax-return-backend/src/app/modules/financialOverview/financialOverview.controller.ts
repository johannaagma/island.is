import { Controller, Get, Param } from '@nestjs/common'
import { FinancialOverviewService } from './financialOverview.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { FinancialOverview } from './model/financialOverview'
// import { CurrentUser, User } from '@island.is/auth-nest-tools'

//TODOx ætti að vera IdsUserGuard og nota nationalId úr token ekki param
// @UseGuards(IdsUserGuard, ScopesGuard)
@ApiTags('Financial overview')
@Controller({
  path: 'financial-overview',
  version: ['1'],
})
export class FinancialOverviewController {
  constructor(
    private readonly financialOverviewService: FinancialOverviewService,
  ) {}

  @Get(':nationalId')
  @Documentation({
    description: 'Get financial overview for logged in user',
    response: {
      status: 200,
      type: FinancialOverview,
    },
    request: {
      params: {
        nationalId: {
          type: 'string',
          description:
            'National ID of the logged-in user. Will be retrieved from token when authentication is implemented.',
          required: true,
        },
      },
    },
  })
  getApplicationById(
    @Param('nationalId') nationalId: string,
    // @CurrentUser() user: User,
  ): Promise<FinancialOverview | null> {
    return this.financialOverviewService.getMyFinancialOverview(
      nationalId,
      // user,
    )
  }
}
