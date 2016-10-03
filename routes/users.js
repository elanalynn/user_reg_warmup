const express = require('express')
const router = express.Router()
const db = require('../db/api')

router.get('/', function(req, res) {
  db.getAll().then(users => res.send(users))
})

router.post('/', function(req, res) {
  res.send(id)
})

module.exports = router
