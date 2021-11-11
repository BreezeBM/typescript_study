export {}
function* fibonacciGenerator() {
    let a = 0;
    let b = 1;
    while(true) {
        yield a;
        [a, b] = [b, a + b]
    };
};

let fibonacci = fibonacciGenerator();
fibonacci.next() // { value: 0, done: false }
fibonacci.next() // { value: 1, done: false }
fibonacci.next() // { value: 1, done: false }
fibonacci.next() // { value: 2, done: false }
fibonacci.next() // { value: 3, done: false }
fibonacci.next() // { value: 5, done: false }
fibonacci.next() // { value: 8, done: false }
