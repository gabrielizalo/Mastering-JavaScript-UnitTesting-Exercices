var expect = require('chai').expect
var sinon = require('sinon')
var fs = require('fs')
var reader = require('../reader')

describe('Reader module', function () {
  afterEach(function () {
    fs.readFile.restore()
  })

  it('should read the correct file', function () {
    var expected = 'sample.txt'

    // fs.readFile = function (filename) {    /// The test-doubles
    //   expect(filename).to.equal(expected)
    // }
    var spy = sinon.spy(fs, 'readFile')  // Sinon Spy

    reader.lineToArray(expected, function () { })

    expect(spy.withArgs(expected).calledOnce).to.be.true
  })

  it('should convert the correct data into an array', function () {
    var data = 'line1\nline2\nline3'
    var expected = ['line1', 'line2', 'line3']
    var stub = sinon.stub(fs, 'readFile')
    stub.callsArgWith(2, null, data)

    // fs.readFile = function (filename, options, callback) {   /// The test-doubles
    //   callback(null, data)
    // }

    reader.lineToArray(expected, function (err, array) {
      expect(array).to.deep.equal(expected)
    })
  })

  it('should pass the correct encoding parameter', function () {
    var expected = { encoding: 'utf8' }
    var mock = sinon.mock(fs)
    mock.expects('readFile').once().withArgs(sinon.match.any, expected)

    reader.lineToArray('whatever.txt', function () {
      mock.verify()
    })
  })
})
