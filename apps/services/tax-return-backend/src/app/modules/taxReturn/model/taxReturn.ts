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
import { TaxReturnEntry } from './taxReturnEntry'

@Table({
  tableName: 'tax_return',
})
export class TaxReturn extends Model<
  InferAttributes<TaxReturn>,
  InferCreationAttributes<TaxReturn>
> {
  @ApiProperty({
    description:
      'Application ID, should be the same application GUID that is used in island.is application system',
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
    description: 'National ID of the user this tax return belongs to',
    example: '123456-7890',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nationalId!: string

  @ApiProperty({
    description: 'What year this tax return is for',
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
    description: 'Entries connected to this tax return',
    type: [TaxReturnEntry],
  })
  @HasMany(() => TaxReturnEntry)
  entries!: TaxReturnEntry[]
}
