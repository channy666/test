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
    for (var i = 1; i <= Number(lines); i++) {
        stars(i, Number(lines))
    }
    var i = 1
    while (i < Number(lines)) {
        console.log(repeat(' ', Number(lines) - 1) + '|')
        i++
    }
}


function stars (x, n) {
    console.log(repeat(' ', n - x) + repeat('*', x * 2 - 1))
}


function repeat (y, n) {
    var str = ''
    var i = 1
    while (i <= n) {
        str += y
        i++
    }
    return str
}