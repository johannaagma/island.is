import { Args, Query, Resolver } from '@nestjs/graphql'
import { TaxReturn } from './model/taxReturn.model'
import { TaxReturnService } from '../taxReturn.service'

@Resolver()
export class MainResolver {
  constructor(private readonly taxReturnService: TaxReturnService) {}

  @Query(() => [TaxReturn])
  async taxReturns(@Args('nationalId') nationalId: string) {
    const res = await this.taxReturnService.getTaxReturns(nationalId)
    return res.data
  }

  @Query(() => TaxReturn)
  async taxReturnById(@Args('id') id: string) {
    const res = await this.taxReturnService.getTaxReturnById(id)
    return res
  }
}
