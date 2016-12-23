
import { createApolloServer } from 'meteor/orionsoft:apollo'
import typeDefs from './schema'
import resolvers from './resolvers'

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
