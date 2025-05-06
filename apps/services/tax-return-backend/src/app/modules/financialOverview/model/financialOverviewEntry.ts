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
import { FinancialOverview } from './financialOverview'

@Table({
  tableName: 'financial_overview_entry',
})
export class FinancialOverviewEntry extends Model<
  InferAttributes<FinancialOverviewEntry>,
  InferCreationAttributes<FinancialOverviewEntry>
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
  @ForeignKey(() => FinancialOverview)
  financialOverviewId!: string

  @ApiHideProperty()
  @BelongsTo(() => FinancialOverview, 'financialOverviewId')
  financialOverview!: FinancialOverview

  //TODO add connection to field...

  @ApiPropertyOptional({
    description: 'Data object for this field entry',
    example: '{}',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  data?: string //TODO JSONB

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
