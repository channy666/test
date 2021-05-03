
function multiple (n) {
    for (var i = 1; i <= n; i++) {
        mul(i)
    }
}



function mul (x) {
    for (var i = 1 ; i <= 9; i++) {
        var y = x * i
        console.log(x, '*', i, '=', y)
    }
}



// 更加解法

function multiExtra (n) {
    for (var i = 1; i <= n; i++) {
        for (var k = 1; k <= 9; k++) {
            console.log(i, '*', k, '=', i*k)
        }
    }
}


multiExtra(4)