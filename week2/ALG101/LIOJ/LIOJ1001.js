var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i]
        var linesArr = line.split(' ')
        console.log (Number(linesArr[0]) + Number(linesArr[1]))
    }
}

