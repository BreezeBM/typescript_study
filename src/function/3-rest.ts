export {}
function sum(...numbers: number[]) {
    return numbers.reduce((total, n) => total + n, 0);
};

sum(1, 2, 3);