module.exports = userWithPass

var JsSHA = require('jssha')

function userWithPass () {
  var firstName = ''
  var lastName = ''
  var hashedPassword = ''

  return {
    setFirstName: function (name) {
      firstName = name
    },

    getFirstName: function () {
      return firstName
    },

    setLastName: function (name) {
      lastName = name
    },

    getLastName: function () {
      return lastName
    },

    geFullName: function () {
      if (!firstName) {
        return lastName
      }

      if (!lastName) {
        return firstName
      }

      return firstName + ' ' + lastName
    },

    setPassword: function (password) {
      var shaObj = new JsSHA('SHA-1', 'TEXT')
      shaObj.update(password)
      hashedPassword = shaObj.getHash('HEX')
    },

    getPassword: function () {
      return hashedPassword
    }
  }
}
