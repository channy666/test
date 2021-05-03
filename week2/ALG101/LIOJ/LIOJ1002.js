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
        if (Number(linesArr[0]) === 0 && Number(linesArr[1]) === 0) {
          return 
        } else if (Number(linesArr[0]) <= Number(linesArr[1])) {
          console.log(linesArr[1])
        } else {
          console.log(linesArr[0])
        }
    } 
}

