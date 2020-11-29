import buildConnection from './lib/polkadotjs';
import { ApiPromise } from '@polkadot/api';

export interface IContext {
  buildConnection: () => Promise<ApiPromise>;
}

export default {
  buildConnection
};
