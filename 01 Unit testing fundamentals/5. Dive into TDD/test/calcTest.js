var expect = require('chai').expect

var calc = require('../calc')

describe('Calculator', function () {
  function test (expression, expected) {
    return function () {
      var result = calc(expression)
      expect(result).to.equal(expected)
    }
  }

  it('should sum two numbers', test('1 + 1', 2))

  it('should sum three numbers', test('1 + 1 + 1', 3))

  it('should subtract two numbers', test('1 - 1', 0))

  it('should sum two floating point numbers', test('1.5 + 1.5', 3))

  it('should divide two numbers', test('4 / 2', 2))

  it('should respect order of operations', test('4 + 4 / 4', 5))
})
