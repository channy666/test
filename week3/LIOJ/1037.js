var readline = require('readline');
const { reverse } = require('dns');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})


// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
/*
function solve(lines) {
  let target = lines[0]
  let arr = filter(lines.splice(2), target)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function filter(arr, callback) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== callback) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

*/

//callback也是一個function寫法

function solve(lines) {
  let target = lines[0]
  let arr = []
  for (let i = 2; i < lines.length; i++) {
    arr.push(lines[i])
  }
  let newArr = filter(arr, function(element){   //filter(arr, function(element => element !== target))
    return (element !== target)  
  })
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
  }
}


function filter(arr, callback) {
  let result = []
  for (let i = 0; i < arr.length; i++) {  
    if (callback(arr[i])) {     //if(callback(arr[i]) === true)
      result.push(arr[i])
    }
  }
  return result
}
