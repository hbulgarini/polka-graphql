import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import 'reflect-metadata';
import context from './context';
import schemaBuilder from './schema/index';

async function startServer() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config(__dirname + '.env');
  console.log('context', context);
  const schema = await schemaBuilder();
  const app = Express();
  const server = new ApolloServer({
    schema,
    context
  });
  server.applyMiddleware({ app });
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
}
startServer();
