export {}
// 열거형의 이름은 단수명사로, 첫 문자는 대문자로 하는 것이 관례, 키의 앞글자들도 대문자로 표시
enum Language {
    Korean,
    English,
    Spanish
};

// 타입스크립트는 자동으로 열거형의 각 멤버에 적절한 숫자를 추론해 할당, 명시적으로 할당도 가능
enum Nation {
    Korea = 0,
    UnitedKingdom = 1,
    Swiss = 2
};

let myLanguage = Language.Korean;
let myNation = Nation['Korea'];

enum Cafe {
    Espresso = 100,
    Americano = 150 + 250,
    CafeLatte, // 401로 추론
};

enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,
    White = 255
};

// enum은 값이나 키로 열거형에 접근할 수 있도록 허용하지만 불안정한 결과를 초래
let red = Color.Red;
let white = Color.White;

let a = Color.Red;
// let b = Color.Green; => Property 'Green' does not exist on type 'typeof Color'.

let c = Color[255]; // White
let d = Color[6]; // undefined 

// 안전한 열거형 const enum
const enum Transportation {
    Subway,
    Bus,
    Taxi
};

let e = Transportation.Bus;
// let f = Transportation.Cab; => Cab이라는 프로퍼티는 존재하지 않음
// let g = Transportation[1]; => const enum은 문자열 리터럴로만 접근할 수 있음
// let h = Transportation[10]; => 문자열 리터럴로만 접근할 수 있음

// const enum은 아무런 자바스크립트도 생성하지 않고, 열거형 멤버의 값을 채워넣는다.
const enum Brand {
    Nike,
    Adidas,
    NewBalance,
    Puma,
    Asics,
};

function brand(b: Brand) {
    return "Nice";
};

// brand.Nike의 값인 0을 넣는다.
brand(Brand.Nike);
// 모든 숫자에 열거형을 할당할 수 있게 된다.
brand(12);

// 위 문제를 해결하기 위해 문자열 값을 갖는 열거형을 사용해 해결
const enum Brand2 {
    Covernat = 'Covernat',
    Thisisneverthat = 'Thisisneverthat',
    Carhatt = 'Carhatt',
    Gramicci = 'Gramicci'
};

function brand2(b: Brand2) {
    return "Good!";
};

brand2(Brand2.Thisisneverthat);
brand2(Brand2.Carhatt);

// brand2(12); => 12는 매개변수로 할당할 수 없음
// brand2('MLB'); => MLB는 매개변수로 할당할 수 없음
