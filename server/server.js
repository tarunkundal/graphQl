import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { log } from 'node:console';


const typeDefs = `#graphql
   type User {
    name: String
    age: Int
    title: String
    isActive: Boolean
      }
      
    type Query {
        greeting: String,
        name: String
        age: Int,
        title: String
        isActive: Boolean
        items: [String]
        user: User
    }`

const resolvers = {
    Query: {
        greeting: () => 'Hello, world!',
        name: () => 'John Doe',
        age: () => 30,
        title: () => 'Software Engineer',
        isActive: () => true,
        items: () => ['Item 1', 'Item 2', 'Item 3'],
        user: () => ({ name: 'John Doe', age: 30, title: 'Software Engineer', isActive: true })
    }
};


const server = new ApolloServer({ typeDefs, resolvers })
const info = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    }
})
log(`🚀 Server ready at http://${info.host}:${info.port}/graphql`, info);