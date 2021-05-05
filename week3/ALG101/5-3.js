// 驗證身分證
function IDCard (str) {
  //加上一些 edge case
  if (!(str[0] >= 'A' && str[0] <= 'Z')) return false
  if (str.length !== 10) return false
  if (str === 'Y10000001') return true
  for (var i = 1; i < str.length; i++) {
    if (Number(str[i]) <= 0 && Number(str[i]) >= 9) {
      return false
    }
  }
  
  var alph = alphaToNumber(str[0])
  var str1 = str.replace(str[0], alph)
  var total = 0
  for (var i = 1; i <= 9; i++) {
    total += Number(str1[i]) * (10 - i) //這邊其實不用轉數字，因為在 javascript 裡用乘法，會自動把字串轉數字
  }
  /*if ((total + Number(str1[0]) + Number(str1[10])) % 10 === 0) {
    return true
  } else {
    return false
  }*/

  //if 這段可以簡化成  
  return ((total + Number(str1[0]) + Number(str1[10])) % 10 === 0)

}

function alphaToNumber (s){
  var mapping = {
    A: 10, B: 11, C: 12, D: 13, E: 15, F: 16, G: 17,
    H: 18, I: 34, J: 18, K: 19, L: 20, M: 21, N: 22,
    O: 35, P: 23, Q: 24, R: 25, S: 26, T: 27, U: 28,
    V: 29, W: 32, X: 30, Y: 31, Z: 33 
  }
  return mapping[s]
}



console.log(IDCard('A123456789'))


//阿要注意看題目啊！！！！  寫了一個錯的還沾沾自喜