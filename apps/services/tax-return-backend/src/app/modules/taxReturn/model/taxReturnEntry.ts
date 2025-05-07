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
  @ForeignKey(() => TaxReturn)
  taxReturnId!: string

  @BelongsTo(() => TaxReturn, 'taxReturnId')
  taxReturn?: TaxReturn

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  @ForeignKey(() => Field)
  fieldId!: string

  @BelongsTo(() => Field, 'fieldId')
  field?: Field

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  data?: Record<string, unknown>

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount!: number

  @CreatedAt
  readonly created!: CreationOptional<Date>

  @UpdatedAt
  readonly modified!: CreationOptional<Date>
}
