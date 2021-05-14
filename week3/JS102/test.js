let arr = [1, 2, 3, 4]
console.log(
  arr
  .filter(function (value) {
    return value > 1
  })
  .map(function (value) {
    return value * 2
  })
)

let arr1 = [5, 6, 7, 8]
console.log(
  arr1
  .filter(value => value > 0)
  .map(value => value * 2)
)