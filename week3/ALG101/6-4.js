function lastIndexOf(arr, n) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === n) {
      return i
    }
  }
  return -1
}

//let s = [1, 4, 6, 55, 3, 8]
console.log(lastIndexOf([1, 4, 3, 7, 55], 55))