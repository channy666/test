var readline = require('readline');
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


function solve(lines) {
    var arr = lines.toString().split(' ')
    for (var i = Number(arr[0]); i <= Number(arr[1]); i++) {
        flower(i)
    }
}


function flower (n) {
    var str = n.toString()
    var num = 0
    for (var i = 0; i < str.length; i++) {
        num += Number(str[i]) ** str.length
    }
    if (num === Number(n)) {
        console.log(Number(n))
    }
}


//數學算法～～～

function solve(lines) {
  let arr = lines[0].split(' ')
  for (let i = Number(arr[0]); i <= Number(arr[1]); i++) {
   isNarcissisticNumber(i, digitsCount(i))
  }
}

function digitsCount (n) {
  let result = 0
  while (n != 0) {
    n = Math.floor(n / 10)
    result++
  }
  return result
}

function isNarcissisticNumber (num, digits) {
  let n = num
  let sum = 0
  while (n != 0) {
    sum += (n % 10) ** digits
    n = Math.floor(n / 10)
  }
  if (sum === num) {
    console.log(num)
  }
}
