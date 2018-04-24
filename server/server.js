import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import graphqlHTTP from 'express-graphql' 
import { buildSchema } from 'graphql'

import Schema from './data/newSchema'
import Root from './data/root'
import url from './mongoose/connectionConfig'

const EXPRESS_PORT = process.env.PORT || 8080

mongoose.connect(url)

const app = express()
const db = mongoose.connection

app.use(cors())

app.use(helmet())

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  rootValue: Root,
  graphiql: true
}))

db.on('error', () => console.log('[ERROR] Failed to establish connection to MongoDB'))

db.once('open', () => console.log(
	`
	[SERVER] Connected to MongoDB
	[SERVER] GraphQL Server is now running on port ${EXPRESS_PORT}
	`
))

app.listen(EXPRESS_PORT, () => console.log(
	`
	[SERVER] GraphQL started...
	[SERVER] Waiting for MongoDB connection...
	`
))
