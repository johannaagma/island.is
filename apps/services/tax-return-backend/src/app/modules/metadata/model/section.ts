import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import {
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import { Field } from './field'

@Table({
  tableName: 'section',
})
export class Section extends Model<
  InferAttributes<Section>,
  InferCreationAttributes<Section>
> {
  @ApiHideProperty()
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: CreationOptional<string>

  @ApiProperty({
    description: 'Tax return section number',
    example: '2.2',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sectionNumber!: string

  @ApiProperty({
    description: 'Tax return section name',
    example: 'Ökutækjastyrkur, dagpeningar og hlunnindi',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sectionName!: string

  @ApiHideProperty()
  @CreatedAt
  readonly created!: CreationOptional<Date>

  @ApiHideProperty()
  @UpdatedAt
  readonly modified!: CreationOptional<Date>

  @ApiProperty({
    description: 'Fields connected to this section',
    type: [Field],
  })
  @HasMany(() => Field)
  fields!: Field[]
}
