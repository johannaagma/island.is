import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'
import { TaxReturnService } from './taxReturn.service'
import { ApiTags } from '@nestjs/swagger'
import { Documentation } from '@island.is/nest/swagger'
import { TaxReturn } from './model/taxReturn'
import { CreateTaxReturnDto } from './dto/createTaxReturnDto'
import { UpdateTaxReturnDto } from './dto/updateTaxReturnDto'
import { GetTaxReturnsResponse } from './dto/getTaxReturnsResponse'
import { GetTaxReturnResponse } from './dto/getTaxReturnResponse'

@ApiTags('Tax return')
@Controller({
  path: 'tax-return',
  version: ['1'],
})
export class TaxReturnController {
  constructor(private readonly taxReturnService: TaxReturnService) {}

  //TODOx all í pathinu?
  @Get()
  @Documentation({
    summary: 'Get all tax returns, possible to filter by year',
    response: {
      status: 200,
      type: GetTaxReturnsResponse,
    },
    request: {
      query: {
        year: {
          type: 'string',
          description: 'Year the tax return belongs to',
          required: false,
        },
      },
    },
  })
  getTaxReturns(@Query('year') year?: string): Promise<GetTaxReturnsResponse> {
    return this.taxReturnService.getTaxReturns(year)
  }

  @Get(':id')
  @Documentation({
    summary: 'Get tax return by ID',
    response: {
      status: 200,
      type: GetTaxReturnResponse,
    },
    request: {
      params: {
        id: {
          type: 'string',
          description:
            'Tax return ID, should be the same application GUID that is used in island.is application system',
          required: true,
        },
      },
    },
  })
  getTaxReturnById(@Param('id') id: string): Promise<GetTaxReturnResponse> {
    return this.taxReturnService.getTaxReturnById(id)
  }

  @Post()
  @Documentation({
    summary: 'Create tax return',
    response: {
      status: 201,
      type: TaxReturn,
    },
  })
  createTaxReturn(
    @Body() taxReturnDto: CreateTaxReturnDto,
  ): Promise<TaxReturn> {
    return this.taxReturnService.createTaxReturn(taxReturnDto)
  }

  @Put(':id')
  @Documentation({
    summary: 'Update tax return by ID',
    response: {
      status: 200,
      type: TaxReturn,
    },
    request: {
      params: {
        id: {
          type: 'string',
          description:
            'Tax return ID, should be the same application GUID that is used in island.is application system',
          required: true,
        },
      },
    },
  })
  updateTaxReturn(
    @Param('id') id: string,
    @Body() taxReturnDto: UpdateTaxReturnDto,
  ): Promise<TaxReturn> {
    return this.taxReturnService.updateTaxReturn(id, taxReturnDto)
  }

  @Delete(':id')
  @Documentation({
    summary: 'Delete tax return by ID',
    response: {
      status: 204,
      type: TaxReturn,
    },
    request: {
      params: {
        id: {
          type: 'string',
          description:
            'Tax return ID, should be the same application GUID that is used in island.is application system',
          required: true,
        },
      },
    },
  })
  deleteTaxReturn(@Param('id') id: string) {
    this.taxReturnService.deleteTaxReturn(id)
  }
}
