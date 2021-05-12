function double(n) {
  return n * 2
} 

let arr = [1, 3, 5, 7, 9]
let newArr = arr.map(double)
console.log(newArr)



let arr1 = [1, 3, 5, 7, 9, 11]
let newArr1 = []
for (let i = 0; i < arr1.length; i++) {
  newArr1.push(double(arr1[i]))
} 
console.log(newArr1)

// 老師解法如下

function map (arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i])
  }
  return result
}

console.log(map(arr1, double))