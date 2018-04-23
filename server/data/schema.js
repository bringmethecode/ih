import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import {
  userQueries,
  userMutations
} from './users/users'

const Root = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...userQueries
  }),
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...userMutations
  }),
})

const Schema = new GraphQLSchema({
  query: Root,
  mutation: Mutation
})

export default Schema