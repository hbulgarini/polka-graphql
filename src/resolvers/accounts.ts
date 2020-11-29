/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver, Arg, Ctx } from 'type-graphql';
import AccountSchema from '../schema/accounts';
import type { IContext } from '../context';

import AccountResponse from '../schema/accounts/responses';

@Resolver(() => AccountSchema)
export class AccountResolver {
  @Query(() => AccountResponse)
  async accountInformation(
    @Arg('address') address: string,
    @Ctx() _ctx: IContext
  ): Promise<AccountResponse> {
    const api = await _ctx.buildConnection();
    const result = await api.query.system.account(address);
    const {
      data: { free, reserved, miscFrozen, feeFrozen },
      nonce
    } = result;

    // toBigInt() is prefered, but in the process to get the correct library for defyining type-graphql BigInt
    return {
      nonce: nonce.toString(),
      balance: {
        free: free.toString(),
        reserved: reserved.toString(),
        miscFrozen: miscFrozen.toString(),
        feeFrozen: feeFrozen.toString()
      }
    };
  }
}
