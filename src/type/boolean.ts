export {}
let a = true;
let b = false;
// const를 사용해서 타입스크립트가 자동으로 변수의 타입을 리터럴로 추론
// const를 사용했기 때문에 타입스크립트가 그 변수의 값이 절대 변하지 않는다는 사실을 알게되고, 변수가 가질수 있는 가장 좁은 타입으로 추론
const c = true;
let d: boolean = true;
// 타입리터럴 : 오직 하나의 값을 나타내는 타입
// 안정성을 추가로 확보해주는 언어기능
let e: true = true;
let f: true = true;