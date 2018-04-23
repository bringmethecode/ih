const config = {
  database: 'graphql',
  user: 'root',
  password: 'password',
  authSource: 'admin',
  mongoPort: 27018
}

const url = `mongodb://${config.user}:${config.password}@localhost:${config.mongoPort}/${config.database}?authSource=${config.authSource}`

export default url
