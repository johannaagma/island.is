import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SequelizeConfigService } from '../sequelizeConfig.service'
// import { TaxReturnModule } from './modules/taxReturn/taxReturn.module'
import { FinancialOverviewModule } from './modules/financialOverview/financialOverview.module'
import { MetadataModule } from './modules/metadata/metadata.module'

@Module({
  imports: [
    // TaxReturnModule,
    FinancialOverviewModule,
    MetadataModule,
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
