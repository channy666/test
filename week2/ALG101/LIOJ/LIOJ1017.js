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
    var take = Number(lines[0])
    var total = Number(lines[1])
    var items = lines.slice(2)
    var value = []
    for (var i = 0; i < items.length; i++) {
        value.push(Number(items[i]))
    }
    value.sort(function (a, b) {
        return b - a
    })
    var stole = 0
    if (take <= total) {
        for (var i = 0; i < take ; i++) {
            stole += value[i]
        }
    } else {
        for (var i = 0; i < total; i++) {
            stole += value[i]
        }
    }   
    console.log(stole)
}
