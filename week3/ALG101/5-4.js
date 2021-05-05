function addDigits (n) {
  var nArr = n + ''
  var total = 0
  for (var i = 0; i < nArr.length; i++) {
    total += Number(nArr[i])
  }
  return total
}


console.log(addDigits(10))
console.log(addDigits(11))
console.log(addDigits(123465))
console.log(addDigits(214356))
