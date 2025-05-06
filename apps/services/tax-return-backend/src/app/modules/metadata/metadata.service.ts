import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Field } from './model/field'
import { Section } from './model/section'
import { FieldsReponse } from './dto/fieldsResponse'

@Injectable()
export class MetadataService {
  constructor(
    @InjectModel(Field)
    private fieldModel: typeof Field,
  ) {}

  async getFields(year: string): Promise<FieldsReponse> {
    const fields = await this.fieldModel.findAll({
      where: { year },
      include: [
        {
          model: Section,
          attributes: {
            exclude: ['id', 'created', 'modified', 'fields'],
          },
        },
      ],
      attributes: {
        exclude: ['id', 'sectionId', 'created', 'modified'],
      },
      order: ['order'],
    })

    return { data: fields || [] }
  }
}
