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
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: CreationOptional<string>

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sectionNumber!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sectionName!: string

  @CreatedAt
  readonly created!: CreationOptional<Date>

  @UpdatedAt
  readonly modified!: CreationOptional<Date>

  @HasMany(() => Field)
  fields!: Field[]
}
