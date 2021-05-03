function switchCase (str) {
    var strCase = ''
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i)
        if (char >= 'a'.charCodeAt(0) && char <= 'z'.charCodeAt(0)) {
            strCase += String.fromCharCode(char - 32)
        } else {
            strCase += String.fromCharCode(char + 32)
        }
    }
    console.log(strCase)
}


switchCase('HeyGirl')