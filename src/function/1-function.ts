export {}
// 특별한 상황이 아니고서는 매개변수를 추론하지 않는다.
function add(a: number, b: number) {
    return a + b;
};

// 반환타입은 자동으로 추론하지만 원하면 명시할 수 있다. 타입스크립트가 해줄 수 있는 일이기 때문에 굳이 명시하지 않고 추론하게 놔둔다.
function add2(a: number, b: number): number {
    return a + b;
};

function greet(name: string) {
    return `hello ${name}`;
};

let greet2 = function(name: string) {
    return `hello ${name}`;
};

let greet3 = (name: string) => {
    return `hello ${name}`;
};

let greet4 = (name: string) => `hello ${name}`;

let greet5 = new Function('name', 'return "hello" + name');

// 함수를 호출할 때 타입정보는 따로 제공할 필요 x
// 함수이 매개변수와 인수의 타입이 호환되는지 확인
add(1, 2)


// add(1) => 2개의 인수가 필요한데 1나만 보냄
// greet(123) => string타입의 변수를 받는데 숫자를 보냄

function sum(a: number, b: number) {
    return a + b;
};

// sum함수는 두개의 숫자 인수를 받아서 한개의 숫자를 반환한다.
// (a: number, b: number) => number
// 이 표현은 타입스크립트의 함수 타입문법으로, 호출 시그니처(call signature) 또는 타입 시그니처(type signature)라고 부른다.

// greet(name: string) 함수
type Greet = (name: string) => string;

type Greet2 = {
    (name: string): string
}

// stamp(name: string, userId?: string)함수
type Stamp = (name: string, userId?: string) => void

type SayTime = (name: string, messasge?: string) => void

// 매개변수에 타입을 지정하지 않아도 된다. 문맥적 타입화
let sayTime: SayTime = (name, message = 'tic toc!') => {
    let time = new Date().toLocaleTimeString();
    console.log(name, time, message);
};

sayTime("Leo");

// 오버로딩
type Itinerary = unknown

type TravelSchedule = {
    (start: Date, end: Date, spot: string): Itinerary
    (start: Date, spot: string): Itinerary
}

// let travel: TravelSchedule = (start, end, destination) => {
//   //...
// } => Type '(start: Date, end: Date, destination: string) => void' is not assignable to type 'TravelSchedule'.

// 여러개의 오버로드(호출 시그니처가 여러개인 함수) 시그니처를 선언하면, 호출자의 관점에서는 오버로드 시그니처들의 유니온이 된다.
// 조합된 시그니처는 자동으로 추론 x 직접 선언해야 한다.
let travel: TravelSchedule = (start: Date, toOrDestination: Date | string, destination?: string) => {
  //...
} 
