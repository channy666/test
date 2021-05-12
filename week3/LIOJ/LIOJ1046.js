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
  for (let i = 0; i < lines[0].length; i++) {
    if (lines[i][0] === lines[i][1] && lines[i][1] === lines[i][2]) {
      console.log(lines[i][0])
      return 0
    }
  }
  for (let i = 0; i < lines[0].length; i++){
    if (lines[0][i] === lines[1][i] && lines[1][i] === lines[2][i]) {
      console.log(lines[0][i])
      return 0
    }
  }
  if (lines[0][0] === lines[1][1] && lines[1][1] === lines[2][2]) {
    console.log(lines[1][1])
    return 0
  }
  if (lines[0][2] === lines[1][1] && lines[1][1] === lines[2][0]) {
    console.log(lines[1][1])
    return 0
  }
  console.log('DRAW')
}

//老師寫法比較讚的
/*
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
  console.log(whoWins(lines))
}
  
  
  
function whoWins (lines) {
  for (let i = 0; i < lines[0].length; i++) {
    if (lines[i][0] === lines[i][1] && lines[i][1] === lines[i][2]) {
      return lines[i][0]
    }
  }
  for (let i = 0; i < lines[0].length; i++){
    if (lines[0][i] === lines[1][i] && lines[1][i] === lines[2][i]) {
      return lines[0][i]
    }
  }
  if (lines[0][0] === lines[1][1] && lines[1][1] === lines[2][2]) {
    return lines[1][1]
  }
  if (lines[0][2] === lines[1][1] && lines[1][1] === lines[2][0]) {
    return lines[1][1]
  }
  return 'DRAW'
}
*/