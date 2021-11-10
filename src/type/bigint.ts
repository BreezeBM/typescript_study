// 2의 53제곱보다 큰 수들도 표현 가능
export {}
let a = 1234n;
const b = 5678n;
var c = a + b;
let d = a < 1235;
// let e = 88.5n; => bigint는 정수여야함
let f: bigint = 100n;
let g: 100n = 100n;
// let h: bigint = 100; => 100은 bigint에 할당 불가