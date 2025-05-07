import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SequelizeConfigService } from '../sequelizeConfig.service'
import { TaxReturnModule } from './modules/taxReturn/taxReturn.module'
import { FinancialOverviewModule } from './modules/financialOverview/financialOverview.module'
import { MetadataModule } from './modules/metadata/metadata.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver } from '@nestjs/apollo'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: 'apps/services/tax-return-backend/src/api.graphql',
      path: '/api/graphql',
      context: ({ req }) => ({ req }),
      driver: ApolloDriver,
    }),
    MetadataModule,
    TaxReturnModule,
    FinancialOverviewModule,
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
