var expect = require('chai').expect
var fs = require('fs')
var reader = require('../reader')

describe('Reader module', function () {
  it('should read the correct file', function () {
    var expected = 'sample.txt'

    fs.readFile = function (filename) {    /// The test-doubles
      expect(filename).to.equal(expected)
    }

    reader.lineToArray(expected, function () { })
  })

  it('should convert the correct data into an array', function () {
    var data = 'line1\nline2\nline3'
    var expected = ['line1', 'line2', 'line3']

    fs.readFile = function (filename, options, callback) {   /// The test-doubles
      callback(null, data)
    }

    reader.lineToArray(expected, function (err, array) {
      expect(array).to.deep.equal(expected)
    })
  })
})
