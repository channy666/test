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

function solve(lines) {
    for (var i = 1; i <= Number(lines[0]); i++) {
        var num = Number(lines[i])
        if (num === 1) {
            console.log('Composite')     
        } else if (com(num) === true) {
          console.log('Composite')  
        } else {
          console.log('Prime')
        }
    }
}



function com (num1) {
  for (var x = 2; x < num1; x++) {
    if (num1 % x === 0) {
      return true
    }           
  }
}