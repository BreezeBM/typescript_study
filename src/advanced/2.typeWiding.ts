export {}
// 타입 넓히기는 타입스크립트의 타입 추론이 어떻게 동작하는지 이해하는 데 필요한 개념이다.

// let, var로 값을 바꿀 수 있는 변수를 선언하면, 그 변수의 타입이 리터럴 값에서 리터럴 값이 속한 기본 타입으로 넓혀진다.
let a = 'x'; // string
let b = 3; // number
var c = true; // boolean
const d = { x: 3 }; // { x: number }
enum E { X, Y, Z }; // E

// 값을 바꿀 수 없는 변수에서는 상황이 달라진다.
const f = 'x'; // 'x'
const g = 3; // 3
const h = true; // true
enum I { J, K, L }

// 타입을 명시하면 타입이 넓어지지 않는다.
let m: 'x' = 'x'; // 'x'
let n: 3 = 3; // 3
var o: true = true; // true
const p: { x: 3} = { x: 3}; // {x: 3}

// let이나 var로 선언했고 타입이 넓혀지지 않은 변수에 다시 값을 할당하면 타입스크립트는 새로운 값에 맞게 변수의 타입을 넓힌다. 
// 변수를 선언할 때 명시적으로 타입을 추가하면 자동 확장이 일어나지 않는다.
const q = 'q'; // 'q'
let r = q; // string

const s: 's' = 's'; // 's'
let t = s; // 's'

// null이나 undefined로 초기화 된 변수는 any타입으로 넓혀진다.
let u = null; // any
u = 3; // any
u = 'u'; // any

// null이나 undefined로 초기화된 변수가 선언 범위를 벗어나면 타입스크립트는 확실한(좁은) 타입을 할당한다.
function v() {
    let w = null; // any
    w = 5;
    w = 'w';
    return w;
};

v(); // string