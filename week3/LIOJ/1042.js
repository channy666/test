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
  console.log(toLowerCase(lines[0]))
}


function toLowerCase(str) {
  let lowerCase = ''
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 'A'.charCodeAt(0) && str.charCodeAt(i) <= 'Z'.charCodeAt(0)) {
      lowerCase += String.fromCharCode(str.charCodeAt(i) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0))
    } else {
      lowerCase += str[i]
    }
  }
  return lowerCase
}