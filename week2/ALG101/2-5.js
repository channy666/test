/*
function secondBig (arr) {
    if (arr[0] > arr[1]) {
        var max = arr[0]
        var max2 = arr[1]
    } else if (arr[0] < arr[1]) {
        var max = arr[1]
        var max2 = arr[o]
    } else {
        var max = arr[0]
        var max2 = 0
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > max) { 
            var max = arr[i]
        } else if (arr[i] < max && arr[i] > max2) {
            var max2 = arr[i]
        } else {
            var max3 = arr[i]
        }
    console.log(max2)
}
*/

//上面錯誤示範 沒有想清楚

function secondBig (arr) {
    if (arr[0] > arr[1]) {
        var max = arr[0] 
        var max2 = arr[1]
    } else if (arr[0] < arr[1]) {
        var max = arr[1]
        var max2 = arr[0]
    } else {
        var max = arr[0]
        var max2 = 0
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            var max2 = max
            var max = arr[i]
        } else if (arr[i] < max && arr[i] > max2) {
            var max2 = arr[i]
        }
    }
    console.log(max2)
}


secondBig([3, 4, 5, 77, 23, 90, 32])