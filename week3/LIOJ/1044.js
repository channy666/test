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
  console.log(padEnd(lines[0], Number(lines[1]), lines[2]))
}

function padEnd(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str
    console.log(str)
  }
  /*
  let result = str
  while (targetLength - result.length > padString.length) {
    result += padString
  }
  if (result.length === targetLength) {
    return result
  }
  let Length = result.length
  for (let i = 0; i < targetLength - Length; i++) {
    result += padString[i]
  }
  */
  //更好的解法：直接先超出去，再截掉
  while (targetLength > str.length) {
    str += padString
  }
  let result = ''
  for (let i = 0 ; i < targetLength; i++) {
    result += str[i]
  }
  return result
}

//另外一種寫法，一個一個小心填入
let n = 0
while (targerLength > str.length) {
  str += padString[n]
  n++
  if (n === padString.length) {
    n = 0
  }
}