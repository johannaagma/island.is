import { Field, ObjectType } from '@nestjs/graphql'
import { GraphQLJSON } from 'graphql-type-json'

@ObjectType()
class TaxReturnEntry {
  @Field(() => String)
  fieldSectionNumber!: string

  @Field(() => String)
  fieldSectionName!: string

  @Field(() => Number)
  fieldNumber!: number

  @Field(() => String, { nullable: true })
  fieldName?: string

  @Field(() => GraphQLJSON, { nullable: true })
  data?: Record<string, unknown>

  @Field(() => Number)
  amount!: number
}

@ObjectType()
export class TaxReturn {
  @Field(() => String)
  id!: string

  @Field(() => String)
  nationalId!: string

  @Field(() => Number)
  year!: number

  @Field(() => [TaxReturnEntry], { nullable: true })
  entries?: TaxReturnEntry[]
}
