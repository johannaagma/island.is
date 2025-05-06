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
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import { TaxReturn } from './taxReturn'
import { Field } from '../../metadata/model/field'

@Table({
  tableName: 'tax_return_entry',
})
export class TaxReturnEntry extends Model<
  InferAttributes<TaxReturnEntry>,
  InferCreationAttributes<TaxReturnEntry>
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
  @ForeignKey(() => TaxReturn)
  taxReturnId!: string

  @ApiHideProperty()
  @BelongsTo(() => TaxReturn, 'taxReturnId')
  taxReturn?: TaxReturn

  @ApiHideProperty()
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  @ForeignKey(() => Field)
  fieldId!: string

  @ApiPropertyOptional({
    description: 'Entry field information',
  })
  @BelongsTo(() => Field, 'fieldId')
  field?: Field

  @ApiPropertyOptional({
    description: 'Data object for this field entry',
    example: "{ sourceName: 'VR' }",
  })
  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  data?: Record<string, unknown>

  @ApiProperty({
    description: 'Amount for this field entry',
    example: 1000000,
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount!: number

  @ApiHideProperty()
  @CreatedAt
  readonly created!: CreationOptional<Date>

  @ApiHideProperty()
  @UpdatedAt
  readonly modified!: CreationOptional<Date>
}
