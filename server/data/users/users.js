import {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} from 'graphql'

import {
    UserType,
    UserInputType,
} from './userTypes'

import User from '../../mongoose/User'

export const userQueries = {
    users: {
        type: new GraphQLList(UserType),
        resolve: () => User.find({}, (error, users) => users),
    }
}

export const userMutations = {
    users: {
        type: new GraphQLList(UserType),
        args: {
            id: {
                type: GraphQLString
            }
        },
        resolve: (_, args) => User.findOne({ '_id': args.id }, (error, user) => user),
    }
}