import {
  Column,
  CreatedAt,
  DataType,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript'
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'

@Table({
  tableName: 'individual',
})
export class Individual extends Model<
  InferAttributes<Individual>,
  InferCreationAttributes<Individual>
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
  name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  postalCode!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city!: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  email?: string

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone?: string

  @CreatedAt
  readonly created!: CreationOptional<Date>

  @UpdatedAt
  readonly modified!: CreationOptional<Date>
}
