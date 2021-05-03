//LIOJ1017.js 嘗試不同解法，但沒有成功

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
    var take = Number(lines[0])
    var kinds = Number(lines[1])
    var items = lines.slice(2)
    console.log(take, kinds, items)
    var stole = []
    var total = 0
    for (var i = 1; i <= take; i++) {
        var times = i
        for ( var x = 0; x < items.length; x++) {
            var max = items[0]
            if (items[x] > max) {
                var max = items[x]
                console.log(x, max)
            }
        }
        stole.push(max)
        items.splice(x, 1)
    }
    for (var i = 0; i < stole.length; i++) {
        total += Number(stole[i])
    }
    console.log(total)
}


solve([3, 5, 1, 3, 5, 7, 9])

/*var arr = [1, 2, 4, 6, 7 ,9, 0]
var ar = arr.splice(2, 1)
console.log(arr, ar)
*/
