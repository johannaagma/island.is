import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger'
import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  HasOne,
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
  @ApiHideProperty()
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: CreationOptional<string>

  @ApiHideProperty()
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  @ForeignKey(() => Section)
  sectionId!: string

  @ApiProperty({
    description: 'Section in the tax return that this field is part of',
  })
  @BelongsTo(() => Section, 'sectionId')
  section!: Section

  @ApiProperty({
    description: 'Tax return field number (reitur)',
    example: 131,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fieldNumber!: number

  @ApiProperty({
    description: 'Tax return field name',
    example: 'Starfsmenntastyrkur',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fieldName!: string

  @ApiProperty({
    description: 'What year this field belongs to',
    example: '2025',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year!: string

  @ApiProperty({
    description:
      'Order of field, to make sure fields are sorted correctly in the UI for the tax return',
    example: 1,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order!: number

  @ApiPropertyOptional({
    description:
      'Data schema for this field - will not be implemented / used for now',
    example: '{}',
  })
  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  entryDataSchema?: Record<string, unknown>

  @ApiProperty({
    description:
      "Indicates if this field's entry can be edited in the tax return",
    example: true,
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canEditEntry!: boolean

  @ApiProperty({
    description:
      'Indicates if a new entry can be added for this field in the tax return',
    example: true,
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  canAddEntry!: boolean

  @ApiHideProperty()
  @CreatedAt
  readonly created!: CreationOptional<Date>

  @ApiHideProperty()
  @UpdatedAt
  readonly modified!: CreationOptional<Date>
}
