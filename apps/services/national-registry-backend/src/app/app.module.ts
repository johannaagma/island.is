import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { SequelizeConfigService } from '../sequelizeConfig.service'
import { IndividualModule } from './modules/individual/individual.module'

@Module({
  imports: [
    IndividualModule,
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
