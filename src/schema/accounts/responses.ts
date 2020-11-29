import { Field, ObjectType } from 'type-graphql';

// need to get the proper library that lets to define BigInt types for type-graphl.
@ObjectType()
export class BalanceType {
  @Field()
  free: string;
  @Field()
  reserved: string;
  @Field()
  miscFrozen: string;
  @Field()
  feeFrozen: string;
}

@ObjectType({ description: 'User Response' })
export default class AccountResolver {
  @Field()
  nonce: string;
  @Field()
  balance: BalanceType;
}
