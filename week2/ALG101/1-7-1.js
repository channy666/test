/*
var half = 字串長度 / 2 (取整數)
for ( i from 0 to half) {
    var temp = 字串[0]
    var 字串[0] = 字串[字串長度 - (i + 1)]
    var 字串[字串長度 - (i + 1)]
}
end for
印出字串
*/

/*
function reverse(string) {
    var half = Math.floor(string.length / 2)
    for (var i = 0; i <= half; i++) {
        var temp = string[i]
        var string[i] = string[string.length - (i + 1)]
        var string[string.length - (i + 1)] = temp
    }
    console.log(string)
}
*/


function reverse (string) {
    var arr = string.split('')
    var rra = []
    for (var i = 0; i < arr.length; i++) {
        rra.push(arr[arr.length - (i + 1)])
    }
    console.log(rra.join('')) 
}




//改進一下






function reverse1 (string) {
    var gnirts = ''
    for ( var i = (string.length -1); i < 0; i--) {
        gnirts = string[i]
    }
    console.log(gnirts) 
}


reverse('hello')
