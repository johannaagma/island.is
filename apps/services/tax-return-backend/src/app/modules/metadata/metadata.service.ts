import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
// import type { User } from '@island.is/auth-nest-tools'
import { Field } from './model/field'
import { Section } from './model/section'

@Injectable()
export class MetadataService {
  constructor(
    @InjectModel(Field)
    private fieldModel: typeof Field,
  ) {}

  async getFields(
    year: string,
    // user: User,
  ): Promise<Field[]> {
    const fields = await this.fieldModel.findAll({
      where: { year },
      include: [
        {
          model: Section,
          attributes: {
            exclude: ['id', 'created', 'modified'], //fields?
          },
        },
      ],
      attributes: {
        exclude: ['id', 'sectionId', 'created', 'modified'],
      },
      order: ['order'],
    })

    return fields || []
  }
}
