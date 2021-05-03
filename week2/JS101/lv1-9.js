function findAllSmall (arr, num) {
    var smallArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            smallArr.push(arr[i])
        }
    }
    console.log(smallArr)
}

findAllSmall([3, 55, 7, 91, 35, 1, 0], 2)