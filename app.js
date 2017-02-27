const express = require('express')
const config = require('./config/config')
const app = express()

var env = 'development'
require('./config/database')(config[env])
require('./config/express')(app, config[env])
require('./administration/routes')(app, config[env])
require('./client/routes')(app, config[env])

app.listen(config[env].port, function () {
  console.log('Port ' + config[env].port)
})

module.exports = app
