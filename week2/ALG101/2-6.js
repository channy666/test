function toBigCase (str) {
    var charArr = ''
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
            charArr += String.fromCharCode(str.charCodeAt(i) - ('a'.charCodeAt(0) - 'A'.charCodeAt(0)))
        } else {
            charArr += str[i]
        }
    }
    console.log(charArr)
}

toBigCase('helloWorld')

//改超久 還出動男友 結果只是打成中括號 

/*
var str = 'g'
var STRCode = [str.charCodeAt(0) - ('a'.charCodeAt(0) - 'A'.charCodeAt(0))]
console.log(STRCode)
console.log(String.fromCharCode(STRCode))
*/