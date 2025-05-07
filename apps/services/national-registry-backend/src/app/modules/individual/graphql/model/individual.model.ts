import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Individual {
  @Field(() => String)
  nationalId!: string

  @Field(() => String)
  name!: string

  @Field(() => String)
  address!: string

  @Field(() => String)
  postalCode!: string

  @Field(() => String)
  city!: string

  @Field(() => String, { nullable: true })
  email?: string

  @Field(() => String, { nullable: true })
  phone?: string
}
