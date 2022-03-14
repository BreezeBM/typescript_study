// 런타임에 모든 변수는 유일한 값을 가진다.
// 그러나 타입스크립트가 작성된 코드를 체크하는 정적 분석 시점에, 변수는 '가능한'값 들의 집합인 타입을 가진다.
// 상수를 사용해서 변수를 초기화할 때 타입을 명시하지 않는다면 타입체커를 타입을 결정해야 한다.
// 즉 지정된 단일 값을 가지고 할당 가능한 값들의 집합을 유추해야 한다.
interface Vector3 {x: number, y: number, z: number}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
    return vector[axis];
};

// let x = 'x';
// let vec = {x: 10, y: 20, z: 30};
// getComponent(vec, x) // -> TS2345: Argument of type 'string' is not assignable to parameter of type '"x" | "y" | "z"'.
// x타입은 할당 시점에 넓히기가 동작해서 string으로 추론이 되었다.

const x = 'x' // 타입이 "x" 좁은 타입이 된다. x는 더이상 재할당이 안되기 때문
let vec = {x: 10, y: 20, z: 30};
getComponent(vec, x) // 에러 x

const mixed = ['x', 1];
// 후보들
/*
* ('x' | 1)[]
* ['x', 1]
* [string | number]
* readonly [string, number]
* (string | number)[]
* readonly (string | number)[]
* [any, any]
* any[]
* */

// 객체의 경우에는 타입스크립트의 넓히기 알고리즘은 각 요소를 let에 할당된 것처럼 다룬다.
const v = {
    x: 1,
};
// 이라면 v의 타입은 {x: number}가 된다.

const v1 = {
    x: 1,
    y: 2,
}; // 타입은 {x: number, y: number}

const v2 = {
    x: 1 as const,
    y: 2,
}; // 타입은 {x: 1, y: number}

const v3 = {
    x: 1,
    y: 2,
} as const;
// 타입은 {readonly x: 1, readonly y: 2}
