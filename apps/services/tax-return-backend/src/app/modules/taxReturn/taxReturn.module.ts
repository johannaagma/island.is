import { Module } from '@nestjs/common'
import { TaxReturnController } from './taxReturn.controller'
import { TaxReturnService } from './taxReturn.service'
import { TaxReturn } from './model/taxReturn'
import { SequelizeModule } from '@nestjs/sequelize'

@Module({
  imports: [SequelizeModule.forFeature([TaxReturn])],
  controllers: [TaxReturnController],
  providers: [TaxReturnService],
})
export class TaxReturnModule {}
