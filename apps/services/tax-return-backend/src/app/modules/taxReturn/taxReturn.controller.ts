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
import { TaxReturnsResponse } from './dto/taxReturnsResponse'

@ApiTags('Tax return')
@Controller({
  path: 'tax-return',
  version: ['1'],
})
export class TaxReturnController {
  constructor(private readonly taxReturnService: TaxReturnService) {}

  @Get()
  @Documentation({
    summary: 'Get all tax returns, possible to filter by year',
    response: {
      status: 200,
      type: TaxReturnsResponse,
    },
    request: {
      query: {
        limit: {
          type: 'number',
          description:
            'Limits the number of results in a request. The server should have a default value for this field.',
          required: false,
        },
        before: {
          type: 'string',
          description:
            'The client provides the value of startCursor from the previous response pageInfo to query the previous page of limit number of data items.',
          required: false,
        },
        after: {
          type: 'string',
          description:
            'The client provides the value of endCursor from the previous response to query the next page of limit number of data items.',
          required: false,
        },
        year: {
          type: 'string',
          description: 'Year the tax return belongs to',
          required: false,
        },
      },
    },
  })
  getTaxReturns(
    @Query('limit') limit: number,
    @Query('before') before: string,
    @Query('after') after: string,
    @Query('year') year?: string,
  ): Promise<TaxReturnsResponse> {
    return this.taxReturnService.getTaxReturns(limit, before, after, year)
  }

  @Get(':id')
  @Documentation({
    summary: 'Get tax return by ID',
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
  getTaxReturnById(@Param('id') id: string): Promise<TaxReturn | null> {
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
