import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Field } from './model/field'
import { Section } from './model/section'
import { GetFieldsReponse } from './dto/getFieldsResponse'

@Injectable()
export class MetadataService {
  constructor(
    @InjectModel(Field)
    private fieldModel: typeof Field,
  ) {}

  async getFields(year: number): Promise<GetFieldsReponse> {
    const items = await this.fieldModel.findAll({
      where: { year },
      include: [
        {
          model: Section,
        },
      ],
      order: ['order'],
    })

    return {
      data: items.map((item) => ({
        fieldSectionNumber: item.section.sectionNumber,
        fieldSectionName: item.section.sectionName,
        fieldNumber: item.fieldNumber,
        fieldName: item.fieldName,
        year: item.year,
        order: item.order,
        entryDataSchema: item.entryDataSchema,
        canEditEntry: item.canEditEntry,
        canAddEntry: item.canAddEntry,
      })),
    }
  }
}
