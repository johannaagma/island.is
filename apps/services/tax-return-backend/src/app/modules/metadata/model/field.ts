import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import { Section } from './section'

@Table({
  tableName: 'field',
})
export class Field extends Model<
  InferAttributes<Field>,
  InferCreationAttributes<Field>
> {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: CreationOptional<string>

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  @ForeignKey(() => Section)
  sectionId!: string

  @BelongsTo(() => Section, 'sectionId')
  section!: Section

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fieldNumber!: number

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  fieldName?: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order!: number

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  entryDataSchema?: Record<string, unknown>

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canEditEntry!: boolean

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canAddEntry!: boolean

  @CreatedAt
  readonly created!: CreationOptional<Date>

  @UpdatedAt
  readonly modified!: CreationOptional<Date>
}
