for (i from 1 to n) do
    if (i % 15 === 0) print 'fizzbuzz'
    else if (i % 3 === 0) print 'fizz'
    else if (i % 5 === 0) print 'buzz'
    else print i
end for



//本題有更好解法，改天有空再看看






function fizzbuzz (n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzbuzz(19)