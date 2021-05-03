function findSmallCount(a, b) {
    var count = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] < b){
            count += 1
        }
    } 
    console.log(count)
}

findSmallCount([22, 54, 98, 30, 70, 18, 60], 8)