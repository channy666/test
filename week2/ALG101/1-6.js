/*
let 最小的牌 = 第一張牌
for ( i from 1 to n) do
    翻開第 i 張牌
    if ( 第 i 張牌 < 第一張牌 ) do
        第一張牌 = 第 i 張牌
    end if
end for
*/



function findSmallest (cards) {
    var arr = cards.split(' ')
    console.log(arr)
    var small = Number(arr[0])
    for (var i = 1; i < arr.length; i++) {
        if (small > Number(arr[i])) {
            var small = Number(arr[i])
        }
    }
    console.log(small)
}

findSmallest('12 3 45 6 2 8 11')
