import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  links: [String],
  tags: [String]
}, {collection: 'users'})

const User = mongoose.model('User', userSchema)

export default User
