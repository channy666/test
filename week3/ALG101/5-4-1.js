function addDigits1 (x) {
  if (x < 0) {
    n = n * -1
  }
  var sum = 0
  while (x != 0) {
    sum += x % 10
    x = Math.floor(x / 10)
  }
  return sum
}
console.log(addDigits1(1))