function devide (num) {
    var devideNum = []
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            devideNum.push(i)
        }
    }
    console.log(devideNum)
}

devide(52)