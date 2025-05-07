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
import { TaxReturnEntry } from './taxReturnEntry'

@Table({
  tableName: 'tax_return',
})
export class TaxReturn extends Model<
  InferAttributes<TaxReturn>,
  InferCreationAttributes<TaxReturn>
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
  nationalId!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year!: string

  @CreatedAt
  readonly created!: CreationOptional<Date>

  @UpdatedAt
  readonly modified!: CreationOptional<Date>

  @HasMany(() => TaxReturnEntry)
  entries?: TaxReturnEntry[]
}
