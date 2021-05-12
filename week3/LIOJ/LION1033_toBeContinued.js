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
 /* 
  let min = countDistence(lines[1].split(' '), lines[2].split(' '))
  let dot1 = lines[1].split(' ')
  let dot2 = lines[2].split(' ')
  for (let i = 1; i < lines.length - 1; i++) {
    let A = lines[i].split(' ')
    for (let x = i + 1; x < lines.length; x++) {
      let B = lines[x].split(' ')
      if (countDistence(A, B) < min) {
        min = countDistance(A, B)
        dot1 = A
        dot2 = B 
      }
    }
  }
  
  if (Number(dot1[0]) < Number(dot2[0])) {
    console.log(dot1.join(' '))
    console.log(dot2.join(' '))
  } else if (Number(dot1[0]) > Number(dot2[0])) {
    console.log(dot2.join(' '))
    console.log(dot1.join(' '))
  } else {
    if (Number(dot1[1]) > Number(dot2[1])) {
      console.log(dot1.join(' '))
      console.log(dot2.join(' '))
    }
    console.log(dot2.join(' '))
    console.log(dot1.join(' '))
  }
}



function countDistence (x, y) {
  let x1 = Number(x[0])
  let x2 = Number(x[1])
  let y1 = Number(y[0])
  let y2 = Number(y[1])
  let distenceX = (x1 - y1) * (x1 - y1)
  let distenceY = (x2 - y2) * (x2 - y2)
  return Math.sqrt(distenceX + distenceY)
}
*/
  
  
  
  
  
  
  let n = Number(lines[0])
  let dot = []
  for (let i = 1; i < lines.length; i++) {
    let temp = lines[i].split(' ')
    dot.push({
      x: Number(temp[0]),
      y: Number(temp[1])
    })
  }
  let min = Infinity
  let ans = null
  for (let i = 0; i < dot.length - 1; i++) {
    for( let j = i + 1; j < dot.length; j++) {
      if (countDistance(dot[i].x, dot[i].y, dot[j].x, dot[j].y) < min) {
        min = countDistance(dot[i].x, dot[i].y, dot[j].x, dot[j].y)
        ans = {
          x1: dot[i].x,
          y1: dot[i].y,
          x2: dot[j].x,
          y2: dot[j].y
        }
      }
    }
  }

  if (ans.x1 < ans.x2) {
    console.log(ans.x1 + ' ' + ans.y1)
    console.log(ans.x2 + ' ' + ans.y2)
  } else if (ans.x1 > ans.x2) {
    console.log(ans.x2 + ' ' + ans.y2)
    console.log(ans.x1 + ' ' + ans.y1)
  } else {
    if (ans.y1 < ans.y2) {
      console.log(ans.x1 + ' ' + ans.y1)
      console.log(ans.x2 + ' ' + ans.y2)
    }
    console.log(ans.x2 + ' ' + ans.y2)
    console.log(ans.x1 + ' ' + ans.y1)
  }

}


function countDistance(x1, y1, x2, y2) {
  let xDistance = (x1 - x2) * (x1 - x2)
  let yDistance = (y1 - y2) * (y1 - y2)
  return Math.sqrt(xDistance + yDistance)
}