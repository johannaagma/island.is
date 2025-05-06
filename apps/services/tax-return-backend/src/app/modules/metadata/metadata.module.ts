import { Module } from '@nestjs/common'
import { MetadataController } from './metadata.controller'
import { MetadataService } from './metadata.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Field } from './model/field'
import { Section } from './model/section'

@Module({
  imports: [SequelizeModule.forFeature([Field, Section])],
  controllers: [MetadataController],
  providers: [MetadataService],
})
export class MetadataModule {}
