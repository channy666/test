function secondSmall (arr) {
    if (arr[1] < arr[0]) {
        var min = arr[1]
        var min2 = arr[0]
    } else if (arr[1] > arr[0]) {
        var min = arr[0]
        var min2 = arr[1]
    } else {
        var min2 = arr[0]
        var min = 0
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] < min) {
            var min2 = min
            var min = arr[i]
        } else if (arr[i] > min && arr[i] < min2) {
            var min2 = arr[i] 
        }
    }
    console.log(min2)
}


secondSmall([33, -6, 67, 5])