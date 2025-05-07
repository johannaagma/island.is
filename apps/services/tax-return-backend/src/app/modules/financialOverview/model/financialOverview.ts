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
import { FinancialOverviewEntry } from './financialOverviewEntry'

@Table({
  tableName: 'financial_overview',
})
export class FinancialOverview extends Model<
  InferAttributes<FinancialOverview>,
  InferCreationAttributes<FinancialOverview>
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

  @HasMany(() => FinancialOverviewEntry)
  entries!: FinancialOverviewEntry[]
}
