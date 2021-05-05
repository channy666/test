//判斷等差數列

function arithmetic (arr) {
  if (arr.length <= 0) {
    return true
  }
  var x = arr[1] - arr[0]
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== x) {
      return false
    }
  }
  return true
}


console.log(arithmetic([1, 3, 5, 7, 9]))
console.log(arithmetic([2, 4, 7, 8]))