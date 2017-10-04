var fs = require('fs')

module.exports = {
  lineToArray: function (filename, callback) {
    fs.readFile(filename, {encoding: 'utf8'}, function (err, data) {
      if (err) {
        callback(err)
        return
      }

      var lines = data.split(/\n/)
      callback(null, lines)
    })
  }
}
