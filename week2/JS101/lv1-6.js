function position(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            console.log(str[i], i)
            return -1
        }  
    }
    console.log(-1)
}

position('abCdG')