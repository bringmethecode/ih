import { buildSchema } from 'graphql'

const Schema = buildSchema(`
    type Query {
        allUsers: [UserType]!
        allTags: [String]!
    }
    type UserType {
        id: ID!
        name: String!
        links: [String!]!
        tags: [String!]!
    }
    type TagType {
        name: String!
    }
`)

export default Schema
