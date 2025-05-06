import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
// import type { User } from '@island.is/auth-nest-tools'
import { CreateTaxReturnDto } from './dto/createTaxReturnDto'
import { UpdateTaxReturnDto } from './dto/updateTaxReturnDto'
import { NoContentException } from '@island.is/nest/problem'
import { TaxReturn } from './model/taxReturn'
import { TaxReturnEntry } from './model/taxReturnEntry'

@Injectable()
export class TaxReturnService {
  constructor(
    @InjectModel(TaxReturn)
    private taxReturnModel: typeof TaxReturn,
  ) {}

  async getTaxReturnById(
    id: string,
    // user: User,
  ): Promise<TaxReturn | null> {
    const taxReturn = await this.taxReturnModel.findByPk(id, {
      include: [
        {
          model: TaxReturnEntry,
          attributes: {
            exclude: ['id', 'taxReturnId', 'created', 'modified'],
          },
        },
      ],
    })

    if (!taxReturn) {
      throw new NoContentException()
    }

    return taxReturn
  }

  async createTaxReturn(
    applicationDto: CreateTaxReturnDto,
    // user: User,
  ): Promise<TaxReturn> {
    throw new Error('Not implemented')
  }

  async updateTaxReturn(
    applicationId: string,
    applicationDto: UpdateTaxReturnDto,
    // user: User,
  ): Promise<TaxReturn> {
    throw new Error('Not implemented')
  }
}
