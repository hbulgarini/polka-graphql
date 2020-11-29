import { ApiPromise, WsProvider } from '@polkadot/api';

const buildConnection = async (): Promise<ApiPromise> => {
  const { WS_PROVIDER } = process.env;
  const wsProvider = new WsProvider(WS_PROVIDER);
  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      Balance: 'u64'
    }
  });
  return api;
};

export default buildConnection;
