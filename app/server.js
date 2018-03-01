import express from 'express';
import bodyParser from 'body-parser';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

console.log({starting: true});

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use('/graphql', bodyParser.json(), graphqlExpress( req => ({
  schema,
  context: req.context
})));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(3000, () => {
  console.log({running: true});
});
