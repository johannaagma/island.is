import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
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
  @ApiProperty({
    description: 'Financial overview ID',
    example: '00000000-0000-0000-0000-000000000000',
    type: String,
  })
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id!: CreationOptional<string>

  @ApiProperty({
    description: 'National ID of the user this financial overview belongs to',
    example: '123456-7890',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nationalId!: string

  @ApiProperty({
    description: 'What year this financial overview is for',
    example: '2025',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  year!: string

  @ApiHideProperty()
  @CreatedAt
  readonly created!: CreationOptional<Date>

  @ApiHideProperty()
  @UpdatedAt
  readonly modified!: CreationOptional<Date>

  @ApiProperty({
    description: 'Entries connected to this financial overview',
    type: [FinancialOverviewEntry],
  })
  @HasMany(() => FinancialOverviewEntry)
  entries!: FinancialOverviewEntry[]
}
