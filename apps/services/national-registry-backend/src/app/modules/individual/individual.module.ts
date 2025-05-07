import { Module } from '@nestjs/common'
import { IndividualController } from './individual.controller'
import { IndividualService } from './individual.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Individual } from './model/individual'

@Module({
  imports: [SequelizeModule.forFeature([Individual])],
  controllers: [IndividualController],
  providers: [IndividualService],
})
export class IndividualModule {}
