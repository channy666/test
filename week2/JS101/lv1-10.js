function sum(arr) {
    var total = 0
    for (var i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    console.log(total)
}

sum([1, 3, 5, 7, 9, -9, -8, 4])