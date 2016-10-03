const knex = require('./knex')

module.exports = {
  getAll(){
    knex('users')
  },
}
