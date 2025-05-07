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
import { FinancialOverview } from './financialOverview'
import { Field } from '../../metadata/model/field'

@Table({
  tableName: 'financial_overview_entry',
})
export class FinancialOverviewEntry extends Model<
  InferAttributes<FinancialOverviewEntry>,
  InferCreationAttributes<FinancialOverviewEntry>
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
  @ForeignKey(() => FinancialOverview)
  financialOverviewId!: string

  @BelongsTo(() => FinancialOverview, 'financialOverviewId')
  financialOverview!: FinancialOverview

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
  data?: string

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
