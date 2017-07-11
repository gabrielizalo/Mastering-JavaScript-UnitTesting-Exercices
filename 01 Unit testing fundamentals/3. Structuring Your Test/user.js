module.exports = user

function user () {
  var firstName = ''
  var lastName = ''

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
    }
  }
}
