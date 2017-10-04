var user = require('../userWithPass')
var assert = require('assert')

describe('user password', function () {
  var myUser = null

  beforeEach(function () {
    myUser = user()
  })

  // Passwords Hashs generated in https://caligatio.github.io/jsSHA/
  // Input Type: TEXT
  // SHA Variant: SHA-1
  // Number of Rounds: 1
  // Output Type: HEX

  it('should return "     " hashed', function () {
    var password = '     '
    var hashedPass = 'b12d07c4786afb687b82ccef63db4df16da8952c'
    myUser.setPassword(password)
    assert.equal(myUser.getPassword(), hashedPass)
  })

  it('should return "Gabriel" hashed', function () {
    var password = 'Gabriel'
    var hashedPass = 'aaac72d4824650c176db2fc2451be237f164ea98'
    myUser.setPassword(password)
    assert.equal(myUser.getPassword(), hashedPass)
  })

  it('should return "0123456789" hashed', function () {
    var password = '0123456789'
    var hashedPass = '87acec17cd9dcd20a716cc2cf67417b71c8a7016'
    myUser.setPassword(password)
    assert.equal(myUser.getPassword(), hashedPass)
  })

  it('should return "ZTPRW5SSA4E4AAF" hashed', function () {
    var password = 'ZTPRW5SSA4E4AAF'
    var hashedPass = '663fa1dc589b557dfb56de137905a62898d2f3ac'
    myUser.setPassword(password)
    assert.equal(myUser.getPassword(), hashedPass)
  })
})
