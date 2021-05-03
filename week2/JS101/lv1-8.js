function findSmallerTotal (arr, num) {
    var totalArr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            totalArr.push(arr[i])
        }
    }
    total = 0
    for (var i = 0; i < totalArr.length; i++) {
        total += totalArr[i]
    }
    console.log(total)
}

// 改進後

function findSmallerTotal1 (arr, num) {
    var total = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            total += arr[i]
        }
    }
    console.log(total)
}





findSmallerTotal([1, 3, 65, 78, 33, 9, 2], 39)
findSmallerTotal1([1, 3, 65, 78, 33, 9, 2], 39)