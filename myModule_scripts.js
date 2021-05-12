function double (n) {
  return n * 2
}

let obj = {
  double: double,
  triple: function (n) {
    return n * 3
  }
} 

module.exports = obj