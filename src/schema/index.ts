import { buildSchema } from 'type-graphql';
import { AccountResolver } from '../resolvers/accounts';

const resolvers: any = [AccountResolver];

const schemaBuilder = (): Promise<any> =>
  buildSchema({
    resolvers,
    emitSchemaFile: true
  });

export default schemaBuilder;
