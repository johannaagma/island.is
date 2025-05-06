import { Module } from '@nestjs/common'
import { FinancialOverviewController } from './financialOverview.controller'
import { FinancialOverviewService } from './financialOverview.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { FinancialOverview } from './model/financialOverview'
import { FinancialOverviewEntry } from './model/financialOverviewEntry'

@Module({
  imports: [
    SequelizeModule.forFeature([FinancialOverview, FinancialOverviewEntry]),
  ],
  controllers: [FinancialOverviewController],
  providers: [FinancialOverviewService],
})
export class FinancialOverviewModule {}
