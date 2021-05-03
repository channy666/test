function del (str) {
    var str2 = ''
    var del = 'l'
    for (var i = 0; i <str.length; i++) {
        if (str[i] !== del) {
            str2 += str[i]
        }
    }
    console.log(str2)
}


del('wmelnwliehlwnleiwhleihwl')


/*
var str = 'chdlq;o;knqlekvnqlenv/lqlkenql'
console.log(str.indexOf('l'))

*/