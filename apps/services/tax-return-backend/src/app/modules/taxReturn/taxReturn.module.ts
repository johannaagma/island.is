import { Module } from '@nestjs/common'
import { TaxReturnController } from './taxReturn.controller'
import { TaxReturnService } from './taxReturn.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { TaxReturn } from './model/taxReturn'
import { TaxReturnEntry } from './model/taxReturnEntry'
import { Field } from '../metadata/model/field'

@Module({
  imports: [SequelizeModule.forFeature([TaxReturn, TaxReturnEntry, Field])],
  controllers: [TaxReturnController],
  providers: [TaxReturnService],
})
export class TaxReturnModule {}
