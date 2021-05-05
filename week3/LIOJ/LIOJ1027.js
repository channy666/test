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
  var str = lines.toString().replace(/-/g, '')
  var oddSum = 0
  var evenSum = 0
  for (var i = 0; i < str.length; i += 2) {
    var odd = Number(str[i]) * 2
    if (odd >= 10) {
      oddSum += odd - 9
    } else {
      oddSum += odd
    }
  }
  for (var i = 1; i < str.length - 1; i += 2) {
    evenSum += Number(str[i])
  }
  if ((10 - (evenSum + oddSum) % 10) !== Number(str[15])) {
    console.log('INVALID')
    return false
  }
  if (Number(str[0]) === 5) {
    console.log('MASTER_CARD')
  } else {
    console.log('VISA')
  }
}