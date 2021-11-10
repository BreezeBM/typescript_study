export {}
type Age = number;
type Person = {
    name: string,
    age: Age
};

// 타입스크립트는 별칭을 추론하지 않는다. 명시적으로 작성해야 한다.
let age: Age = 25;
let manger: Person = {
    name: "JAMES",
    age: age
};

// 타입별칭은 별칭이 가리키는 타입으로 대치할 수 있다.
let age2 = 30;
let developer: Person = {
    name: "JINA",
    age: age2
};

type City = 'SEOUL';
// type City = "NY" => 타입을 두번정의 할 수 없다.
// 타입별칭도 블록 영역에 적용된다. 모든 블록과 함수는 자신만의 영역을 가지는데, 내부에 정의한 타입 별칭이 외부의 정의를 덮어씌운다.

