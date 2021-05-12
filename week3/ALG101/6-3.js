function repeat (str, times) {
  let result = ''
  let i = 1
  while (i <= times) {
    result += str
    i++
  }
  return result
}

/*
老師用的是 for 迴圈
for (let i = 1; i <= times; i++) {
  result += str
}
*/


console.log(repeat('boobs', 3))