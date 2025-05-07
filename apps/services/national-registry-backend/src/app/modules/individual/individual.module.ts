import { Module } from '@nestjs/common'
import { IndividualController } from './individual.controller'
import { IndividualService } from './individual.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Individual } from './model/individual'
import { MainResolver } from './graphql/main.resolver'

@Module({
  imports: [SequelizeModule.forFeature([Individual])],
  controllers: [IndividualController],
  providers: [IndividualService, MainResolver],
})
export class IndividualModule {}
