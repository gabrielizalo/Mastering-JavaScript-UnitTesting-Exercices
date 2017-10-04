var strings = require('../strings')
var assert = require('assert')

describe('strings module', function () {
  // test 1 for camelCase
  it('should camelCase string with one dash correctly', function () {
    var dashed = 'sample-string'
    var expected = 'sampleString'
    var camel = strings.camelCase(dashed)
    assert.equal(camel, expected)
  })

  // test 2 for camelCase
  it('should camelCase string with multiple dashes', function () {
    var dashed = 'sample-string-with-many'
    var expected = 'sampleStringWithMany'
    var camel = strings.camelCase(dashed)
    assert.equal(camel, expected)
  })

  // test 3 for dashSeparated
  it('should dash separate string with one dash correctly', function () {
    var dashed = 'sampleString'
    var expected = 'sample-string'
    var camel = strings.dashSeparated(dashed)
    assert.equal(camel, expected)
  })

  // test 4 for dashSeparated
  it('should dash separate string with several dash correctly', function () {
    var dashed = 'sampleStringWithMany'
    var expected = 'sample-string-with-many'
    var camel = strings.dashSeparated(dashed)
    assert.equal(camel, expected)
  })

  // test 5 for bonus
  it('should dash separate string and numbers with several dash correctly', function () {
    var dashed = 'camelCaseStringWithNumbers1234'
    var expected = 'camel-case-string-with-numbers1234'
    var camel = strings.dashSeparated(dashed)
    assert.equal(camel, expected)
  })
})
