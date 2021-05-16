/*
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

function solve (lines) {
    var par = Number(lines[0])
    for (var i = 1; i <= par; i++) {
        var arr = lines[i].split(' ')
        if (arr[0].length > arr[1].length) {
            if (arr[2] === 1) {
                console.log('A')
            } else {
                console.log('B')
            }
        } else if (arr[0].length < arr[1].length) {
            if (arr[2] === 1) {
                console.log('B')
            } else {
                console.log('A')
            }
        } else {
            if (arr[0] === arr[1]) {
                console.log('DRAW')
            } else if (arr[2] === '1') {
                for (var x = 0; x < arr[0].length; x++) {
                    if (Number(arr[0][x]) > Number(arr[1][x])) {
                        console.log('A')
                        break
                    } else  if (Number(arr[0][x]) < Number(arr[1][x])) {
                        console.log('B')
                        break
                    }
                }
            } else if (arr[2] === '-1') {
                for (var x = 0; x < arr[0].length; x++) {
                    if (Number(arr[0][x]) > Number(arr[1][x])) {
                        console.log('B')
                        break
                    } else if (Number(arr[0][x]) < Number(arr[1][x])) {
                        console.log('A')
                        break
                    } 
                }
            }
        }
    }
}
solve(['3', '1 2 1', '1 2 -1', '2 2 1'])
*/

function solve(lines) {
    for (let i = 1; i <= Number(lines[0]); i++) {
      const arr = lines[i].split(' ')
      console.log(whoWins(arr[0], arr[1], Number(arr[2])))
    }
  }
  
  function whoWins(a, b, c) {
    const A = a.toString()
    const B = b.toString()
    if (A.length > B.length) {
      if (c === 1) {
        return 'A'
      }
      return 'B'
    } else if (A.length < B.length) {
      if (c === 1) {
        return 'B'
      }
      return 'A'
    } else {
      for (let i = 0; i < A.length; i++) {
        if (A[i] > B[i]) {
          if (c === 1) {
            return 'A'
          }
          return 'B'
        } else if (A[i] < B[i]) {
          if (c === 1) {
            return 'B'
          }
          return 'A'
        }
      }
      return 'DRAW'
    }
  }
  solve(['3', '1 2 1', '1 2 -1', '2 2 1'])
  