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
/*
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  let str = lines[0].replace(/ /g, '')
  let sum = 0
  while (str.length >= 2) {
    for (let i = 0; i < str.length; i++) {
      sum += str[i]
    }
    let str = sum
  console.log(str)
}
*/

function solve(lines) {
  let str = lines[0].replace(/ /g, '')
  let num = Number(str)
  let lifeNum = addDigits(num)
  while (lifeNum >= 10) {
    lifeNum = addDigits(lifeNum) 
  }
  console.log(lifeNum)  
}

function addDigits(n) {
  let total = 0
  while (n != 0) {
    total += n % 10
    n = Math.floor(n / 10)
  }
  return total
}
