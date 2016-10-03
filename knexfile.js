if (process.env.NODE_ENV === 'development') {
  require('dotenv').load()
}

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/user_reg_db',
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
  },
}
