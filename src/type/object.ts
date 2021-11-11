export {}
let a: object = {
    b: 'x'
};
// a.b => b라는 프로퍼티가 존재하지 않는다... 값 자체가 객체라고만 말한다..

// 추론을 하게 놔두는 경우
let c = {
    d: 'y'
};
c.d;

// 명시적으로 지정하는 경우
let e: {f: string} = {
    f: 'z'
};
e.f;

let person : {
    name: string,
    city: string
} = {
    name: "Ben",
    city: "NY"
};

class Person {
    constructor(
        public name: string,
        public city: string
    ) {}
};
let person2 = new Person('KEY', "LA");

let g :{h: number};
// g = {} => h라는 프로퍼티가 없음

// g = {
//     h: 1,
//     i: 2
// } i라는 프로퍼티는 { h: number }  타입에 없음

let w : {
    x: number,
    y?: string, // y라는 프로퍼티를 포함할 수 있다.
    [key: number]: boolean // boolean 타입의 값을 갖는 number 타입의 프로퍼티를 여러개를 포함할 수 있따.
}

w = { x: 1 };
w = { x: 2, y: undefined };
w = { x: 3, y: "Hello" };
w = { x: 4, 5: true };
w = { x: 5, 10: false, 13: true};
// w = { 10: false}; => x라는 프로퍼티가 없음
// w = { x: 6, 15: "Bye"} => string타입은 boolean에 할당 할 수 없음

let user: {
    readonly name: string
} = {
    name: "JANE"
}

user.name;
// user.name = 'JHON' => 읽기 전용이기 때문에 할당할 수 없음

// 빈객체는 피한다. null / undefined를 제외하고 타입에 할당이 가능하기 때문에 피한다.
let object :{};
object = {};
object = [];
object = {a: 1};
object = 2;
