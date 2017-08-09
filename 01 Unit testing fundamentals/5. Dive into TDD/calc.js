module.exports = function (expression) {
  var operators = ['/', '+', '-']

  var re = new RegExp('[0-9.]+|[' + operators.join('') + ']', 'g')

  var parts = expression.match(re)
  var index = 0

  var root = parse()

  return calculate(root)

  function calculate (tree) {
    if (tree.op) {
      switch (tree.op) {
        case '+':
          return calculate(tree.left) + calculate(tree.right)

        case '-':
          return calculate(tree.left) - calculate(tree.right)

        case '/':
          return calculate(tree.left) / calculate(tree.right)

        default:
          throw new Error('Invalid op')
      }
    }

    return tree
  }

  function number () {
    var num = Number(parts[index])
    index++
    return num
  }

  function peek () {
    return parts[index]
  }

  function div () {
    var left = number()
    var next = peek()
    while (next == '/') {
      index++
      var right = number()
      left = {op: next, left: left, right: right}
      next = peek()
    }

    return left
  }

  function parse () {
    var left = div()
    var next = peek()
    while (next === '+' || next === '-') {
      index++
      var right = div()
      left = {op: next, left: left, right: right}
      next = peek()
    }

    return left
  }
}
