const crypto = require('crypto')

module.exports = {
  generateSalt: function () {
    var salt = crypto.randomBytes(128).toString('base64')
    return salt
  },
  hashPassword: function (password, salt) {
    var passwordHash = crypto.createHmac('sha256', salt).update(password).digest('hex')
    return passwordHash
  }
}
