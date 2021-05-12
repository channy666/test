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
  let n = Number(lines[0])
  let code = ''
  for (let i = 0; i < lines[1].length; i++) {
    let temp = lines[1].charCodeAt(i) + n
    while (temp > 'z'.charCodeAt(0)){
      temp -= 26
      
    }
    code += String.fromCharCode(temp)
  } 
  console.log(code)
}

//function 解法
/*
function ceacerCode (n, s) {
  let code = s.charCodeAt(0) - 97
  let newCode = (code + n) % 26
  console.log(newCode + 97)
}
*/