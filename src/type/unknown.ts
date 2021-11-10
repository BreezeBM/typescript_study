export {}
let a: unknown;
let b = a === 123;
console.log(b)
// let c = a + 10; a의 타입이 unknown임

let d: any;

if(typeof a === 'number') {
  d = a + 10;
}
console.log(d)