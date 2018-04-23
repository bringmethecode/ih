import {
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql'

import User from '../../mongoose/User'

const UserType = new GraphQLObjectType({
  name: 'UserType',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    links: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tags: {
      type: new GraphQLList(TagType),
      resolve: (parentValue) => User.find({'_id': parentValue.id}, (error, userTags) => console.log(userTags))
    }
  }),
})

const TagType = new GraphQLObjectType({
  name: 'TagType',
  description: 'Tag type definition',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    }
  }),
})

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInputType',
  description: 'User payload definition',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
  }),
})

export {
  UserType,
  TagType,
  UserInputType
}