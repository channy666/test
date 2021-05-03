var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []


rl.on('line', function (line) {
  lines.push(line)
});


rl.on('close', function() {
  solve(lines)
})


function solve(lines) {
    var num = Number(lines)
    var linesBI = (num.toString(2))
    console.log(linesBI)
    console.log(num.toString(2))
    var bucket = 0
    for (var i = 0; i < linesBI.length; i++) {
        if (linesBI[i] === '1') {
            bucket++
            console.log(i, bucket)
        }
    }
    console.log(bucket)
}






