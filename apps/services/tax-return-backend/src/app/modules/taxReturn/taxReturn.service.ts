import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateTaxReturnDto } from './dto/createTaxReturnDto'
import { UpdateTaxReturnDto } from './dto/updateTaxReturnDto'
import { TaxReturn } from './model/taxReturn'
import { TaxReturnEntry } from './model/taxReturnEntry'
import { Field } from '../metadata/model/field'
import { Section } from '../metadata/model/section'
import { GetTaxReturnsResponse } from './dto/getTaxReturnsResponse'
import { logger } from '@island.is/logging'
import { Sequelize } from 'sequelize-typescript'
import { GetTaxReturnResponse } from './dto/getTaxReturnResponse'

@Injectable()
export class TaxReturnService {
  constructor(
    @InjectModel(TaxReturn)
    private taxReturnModel: typeof TaxReturn,
    @InjectModel(TaxReturnEntry)
    private taxReturnEntryModel: typeof TaxReturnEntry,
    @InjectModel(Field)
    private fieldModel: typeof Field,
    private readonly sequelize: Sequelize,
  ) {}

  async getTaxReturns(year?: string): Promise<GetTaxReturnsResponse> {
    const where: {
      year?: string
    } = {}
    if (year !== undefined) where.year = year

    const items = await this.taxReturnModel.findAll({ where })

    return {
      data: items.map((item) => ({
        id: item.id,
        nationalId: item.nationalId,
        year: item.year,
      })),
    }
  }

  async getTaxReturnById(id: string): Promise<GetTaxReturnResponse> {
    const item = await this.taxReturnModel.findByPk(id, {
      include: [
        {
          model: TaxReturnEntry,
          include: [
            {
              model: Field,
              include: [{ model: Section }],
            },
          ],
        },
      ],
    })

    if (!item) {
      throw new NotFoundException()
    }

    return {
      data: {
        id: item.id,
        nationalId: item.nationalId,
        year: item.year,
        entries: item.entries?.map((entry) => ({
          fieldSectionNumber: entry.field?.section.sectionNumber || '',
          fieldSectionName: entry.field?.section.sectionName || '',
          fieldNumber: entry.field?.fieldNumber || -1,
          fieldName: entry.field?.fieldName,
          data: entry.data,
          amount: entry.amount,
        })),
      },
    }
  }

  async createTaxReturn(taxReturnDto: CreateTaxReturnDto): Promise<TaxReturn> {
    const transaction = await this.sequelize.transaction()
    try {
      const currentYear = new Date().getFullYear().toString()

      const taxReturnId = (
        await this.taxReturnModel.create(
          {
            id: taxReturnDto.id,
            nationalId: taxReturnDto.nationalId,
            year: currentYear,
          },
          { transaction },
        )
      ).id

      for (const entryDto of taxReturnDto.entries ?? []) {
        const fieldId = (
          await this.fieldModel.findOne({
            where: { fieldNumber: entryDto.fieldNumber, year: currentYear },
          })
        )?.id

        if (!fieldId) {
          throw new Error(
            `Error creating tax return, could not find field with number ${entryDto.fieldNumber} to create the entry`,
          )
        }

        await this.taxReturnEntryModel.create(
          {
            taxReturnId: taxReturnId,
            fieldId: fieldId,
            amount: entryDto.amount,
            data: entryDto.data,
          },
          { transaction },
        )
      }

      await transaction.commit()

      // Return the recently created tax return
      const createdTaxReturn = await this.taxReturnModel.findByPk(taxReturnId)
      if (!createdTaxReturn) {
        throw new Error(
          `Newly created tax return with id ${taxReturnId} not found`,
        )
      }
      return createdTaxReturn
    } catch (e) {
      await transaction.rollback()
      logger.error(`Failed to create tax return:`, e)
      throw e
    }
  }

  async updateTaxReturn(
    taxReturnId: string,
    taxReturnDto: UpdateTaxReturnDto,
  ): Promise<TaxReturn> {
    const transaction = await this.sequelize.transaction()
    try {
      const taxReturn = await this.taxReturnModel.findByPk(taxReturnId)
      if (!taxReturn) {
        throw new Error(`Tax return with id ${taxReturnId} not found`)
      }

      // Delete all old entries
      await this.taxReturnEntryModel.destroy({
        where: { taxReturnId },
        transaction,
      })

      // Re-add entries
      for (const entryDto of taxReturnDto.entries ?? []) {
        const fieldId = (
          await this.fieldModel.findOne({
            where: {
              fieldNumber: entryDto.fieldNumber,
              year: taxReturn?.year,
            },
          })
        )?.id

        if (!fieldId) {
          throw new Error(
            `Error creating tax return, could not find field with number ${entryDto.fieldNumber} to create the entry`,
          )
        }

        await this.taxReturnEntryModel.create(
          {
            taxReturnId: taxReturnId,
            fieldId: fieldId,
            amount: entryDto.amount,
            data: entryDto.data,
          },
          { transaction },
        )
      }

      await transaction.commit()

      // Return the recently updated tax return
      const updatedTaxReturn = await this.taxReturnModel.findByPk(taxReturnId)
      if (!updatedTaxReturn) {
        throw new Error(
          `Newly updated tax return with id ${taxReturnId} not found`,
        )
      }
      return updatedTaxReturn
    } catch (e) {
      await transaction.rollback()
      logger.error(`Failed to update tax return:`, e)
      throw e
    }
  }

  async deleteTaxReturn(taxReturnId: string) {
    const transaction = await this.sequelize.transaction()
    try {
      await this.taxReturnEntryModel.destroy({
        where: { taxReturnId },
        transaction,
      })
      await this.taxReturnModel.destroy({
        where: { id: taxReturnId },
        transaction,
      })
      await transaction.commit()
    } catch (e) {
      await transaction.rollback()
      logger.error(`Failed to delete tax return:`, e)
      throw e
    }
  }
}
