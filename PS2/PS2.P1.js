// generator 1
function* fibs () {
    let [val1, val2, result] = [0,1,0]
    while (true) {
        yield result
        result = val1+val2
        val1 = val2
        val2 = result
    }
}

// generator 2
function* even_fibs (fibs) {
    while (true) {
        let next_fib = fibs.next().value;
        if (next_fib % 2 == 0) {
            yield next_fib;
        }
    }
}

// test case
my_fibs = fibs()
my_even_fibs = even_fibs(my_fibs)
let count = 6;
while (count-- > 0) {
    console.log(my_even_fibs.next().value)
}