import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Individual } from './model/individual'
import { GetIndividualResponse } from './dto/getIndividualResponse'

@Injectable()
export class IndividualService {
  constructor(
    @InjectModel(Individual)
    private individualModel: typeof Individual,
  ) {}

  async getIndividual(nationalId: string): Promise<GetIndividualResponse> {
    const item = await this.individualModel.findOne({
      where: { nationalId },
    })

    if (!item) {
      throw new NotFoundException()
    }

    return {
      data: {
        nationalId: item.nationalId,
        name: item.name,
        address: item.address,
        postalCode: item.postalCode,
        city: item.city,
        email: item.email,
        phone: item.phone,
      },
    }
  }
}
