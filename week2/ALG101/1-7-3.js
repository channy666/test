function findBiggest (arr) {
    var big = arr[0]
    for (var i = 1; i < arr.length; i++) {
        if (big < arr[i]) {
            var big = arr[i]
        }
    }
    console.log(big) 
}


findBiggest([14, 5, 33, 76, 4, 0, 11])