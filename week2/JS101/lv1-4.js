function star(n) {
    var s = ''
    for (var i = 1; i <= n; i++) {
        s += '*'
    }
    return s
}

console.log(star(12))