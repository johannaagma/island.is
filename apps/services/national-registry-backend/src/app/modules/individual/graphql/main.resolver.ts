import { Args, Query, Resolver } from '@nestjs/graphql'
import { Individual } from './model/individual.model'
import { IndividualService } from '../individual.service'

@Resolver()
export class MainResolver {
  constructor(private readonly individualService: IndividualService) {}

  @Query(() => Individual)
  async individual(@Args('nationalId') nationalId: string) {
    const res = await this.individualService.getIndividual(nationalId)
    return res.data
  }
}
