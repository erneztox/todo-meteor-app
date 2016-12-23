
import { createApolloServer } from 'meteor/orionsoft:apollo'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './schema'
import resolvers from './resolvers'
import cors from 'cors'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
}, {
  configServer (graphQLServer) {
    graphQLServer.use(cors())
  },
  graphiql: true
})
