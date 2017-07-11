var user = require('../user')
var assert = require('assert')

describe('user object', function () {
  it('should return first name for full name if last name is not set', function () {
    var expected = 'firstName'
    var name = 'firstName'
    var u = user()

    u.setFirstName(name)

    assert(u.geFullName(), expected)
  })

  it('should return last name for full name if fist name is not set', function () {
    var expected = 'lastName'
    var name = 'lastName'
    var u = user()

    u.setLastName(name)

    assert(u.geFullName(), expected)
  })

  it('should return correct full name when both names are set', function () {
    var expected = 'first last'
    var first = 'first'
    var last = 'last'
    var u = user()

    u.setFirstName(first)
    u.setLastName(last)

    assert(u.geFullName(), expected)
  })
})
