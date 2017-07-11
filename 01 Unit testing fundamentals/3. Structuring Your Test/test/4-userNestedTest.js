var user = require('../user')
var assert = require('assert')

describe('user object', function () {
  var u = null

  beforeEach(function () {
    u = user()
  })

  describe('getting full name', function () {
    it('should return first name if last name is not set', function () {
      var expected = 'firstName'
      var name = 'firstName'

      u.setFirstName(name)

      assert(u.geFullName(), expected)
    })

    it('should return last name if fist name is not set', function () {
      var expected = 'lastName'
      var name = 'lastName'

      u.setLastName(name)

      assert(u.geFullName(), expected)
    })

    it('should return correct when both names are set', function () {
      var expected = 'first last'
      var first = 'first'
      var last = 'last'

      u.setFirstName(first)
      u.setLastName(last)

      assert(u.geFullName(), expected)
    })
  })
})
