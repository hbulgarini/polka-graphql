import { Field, ObjectType } from 'type-graphql';
import GraphQLBigInt = require('../../../node_modules/@types/graphql-bigint');

// need to get the proper library that lets to define BigInt types for type-graphl.
@ObjectType()
export class BalanceType {
  @Field(() => GraphQLBigInt)
  free: number;
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
