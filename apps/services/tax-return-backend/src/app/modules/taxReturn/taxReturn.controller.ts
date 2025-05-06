import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { TaxReturnService } from './taxReturn.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { TaxReturn } from './model/taxReturn'
// import { CurrentUser, User } from '@island.is/auth-nest-tools'
import { CreateTaxReturnDto } from './dto/createTaxReturnDto'
import { UpdateTaxReturnDto } from './dto/updateTaxReturnDto'

//TODOx ætti að vera IdsUserGuard
// @UseGuards(IdsUserGuard, ScopesGuard)
@ApiTags('Tax Return Backend')
@Controller({
  path: 'tax-return',
  version: ['1'],
})
export class TaxReturnController {
  constructor(private readonly taxReturnService: TaxReturnService) {}

  //TODO bæta við get all

  @Get(':id')
  @Documentation({
    description: 'Get tax return by ID for logged in user',
    response: {
      status: 200,
      type: TaxReturn,
    },
    request: {
      params: {
        id: {
          type: 'string',
          description:
            'Application ID, should be the same application GUID that is used in island.is application system',
          required: true,
        },
      },
    },
  })
  getApplicationById(
    @Param('id') id: string,
    // @CurrentUser() user: User,
  ): Promise<TaxReturn | null> {
    return this.taxReturnService.getTaxReturnById(id)
  }

  @Post()
  @Documentation({
    description: 'Create tax return for logged in user',
    response: {
      status: 201,
      type: TaxReturn,
    },
  })
  createApplication(
    @Body() applicationDto: CreateTaxReturnDto,
    // @CurrentUser() user: User,
  ): Promise<TaxReturn> {
    return this.taxReturnService.createTaxReturn(applicationDto)
  }

  @Put(':id')
  @Documentation({
    description: 'Update tax return for logged in user',
    response: {
      status: 200,
      type: TaxReturn,
    },
    request: {
      params: {
        id: {
          type: 'string',
          description:
            'Application ID, should be the same application GUID that is used in island.is application system',
          required: true,
        },
      },
    },
  })
  updateApplication(
    @Param('id') id: string,
    @Body() applicationDto: UpdateTaxReturnDto,
    // @CurrentUser() user: User,
  ): Promise<TaxReturn> {
    return this.taxReturnService.updateTaxReturn(id, applicationDto)
  }
}
