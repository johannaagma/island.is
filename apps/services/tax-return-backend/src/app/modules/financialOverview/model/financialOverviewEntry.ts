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
import { Field } from '../../metadata/model/field'

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
  field!: Field

  @ApiPropertyOptional({
    description: 'Data object for this field entry',
    example: "{ sourceName: 'VR' }",
  })
  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  data?: string

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
