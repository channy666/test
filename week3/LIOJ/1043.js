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
  console.log(endsWith(lines[0], lines[1]) ? 'true' : 'false')
}


function endsWith(str, searchString) {
  if (str.length < searchString.length) {
    return false
  }
  /*for (let i = 1; i <= searchString.length; i++) {
    if (str[str.length - i] !== searchString[searchString.length - i]) {
      return false
    }
  }
  return true
  */
 //while 迴圈寫法
  let strIndex = str.length - 1
  let searchIndex = searchString.length - 1
  while (searchIndex >= 0) {
    if (str[strIndex] !== searchString[searchIndex]) {
      return false
    }
    strIndex --
    searchIndex --
  }
  return true
}



