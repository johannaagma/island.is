import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SequelizeConfigService } from '../sequelizeConfig.service'
import { IndividualModule } from './modules/individual/individual.module'
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
    IndividualModule,
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
