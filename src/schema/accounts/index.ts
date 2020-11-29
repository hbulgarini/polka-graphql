import { Field, ObjectType, ID } from 'type-graphql';
@ObjectType({ description: 'Accounts' })
export default class Account {
  @Field(() => ID)
  balance: string;
  nonce: string;
}
