export {}
// 튜플 타입 추론 개선
function tuple<T extends unknown[]>(...ts: T): T {
    return ts
}

let a = tuple(1, true); // [number, boolean]

// 사용자 정의 타입 안전장치
// function isString(a: unknown): boolean {
//     return typeof a === 'string'
// }

// isString('a') // true
// isString([7]) // false

// function parseInput(input: string | number) {
//     let formattedInput: string
//     if(isString(input)) {
//         formattedInput = input.toUpperCase() // =>  Property 'toUpperCase' does not exist on type 'number'. 에러 발생
//     }
// }
// 타입 정제는 현재 영역(유효범위)에 속한 변수만 처리할 수 있다.
// 한 영역에서 다른 영역으로 이동하면 기존의 정제 결과물은 사라져 버린다. 즉 isString은 단순히 parseInput에서 boolean을 반환하는 함수이다라는 것만 안다.
// 제대로 동작하기 위해서는 사용자 정의 타입 안전 장치 기법으로 해결한다.
function isString(a: unknown): a is string {
    return typeof a === 'string'
}

function parseInput(input: string | number) {
    let formattedInput: string
    if(isString(input)) {
        formattedInput = input.toUpperCase() // 에러가 사라짐
    }
}
// 유니온, 인터섹션과 같은 복합 타입에서도 사용 가능

// 조건부 타입
// 'U와 V타입에 의존하는 T타입을 선언하라'. U <: V면 T를 A에 할당하고, 아니면 B에 할당한다.
type IsString<T> = T extends string // 조건 부분 : T는 string의 서브 타입인가?
? true // 서브타입이면 true
: false // 아니면 false 

type A = IsString<string> // true
type B = IsString<number> // false

// 분배적 조건부 (분배법칙)
// string extends T ? A : B => string extends T ? A : B
// (string | number) extends T ? A : B => (string extends T ? A : B) | (number extends T ? A : B)
type ToArray<T> = T[]
type C = ToArray<number> // number[]
type D = ToArray<number | string> // (number | array)[]

type ToArray2<T> = T extends unknown ? T[] : T[]
type E = ToArray2<number> // number[]
type F = ToArray2<number | string> // number[] | string[]

// T에는 존재하지만 U에는 존재하지 않는 타입을 구하는 Without<T, U>
type Without<T, U> = T extends U ? never : T
type G = Without<boolean | number | string, boolean>  // string | number

// G타입을 구하는 과정
// 1.
type G1 = Without<boolean | number | string, boolean>
// 2. 조건을 유니온으로 분배
type G2 = Without<boolean, boolean> | Without<number, boolean> | Without<string, boolean>
// 3. Without을 정의를 교체하고 T와 U를 적용
type G3 = (boolean extends boolean ? never : boolean) | (number extends boolean ? never : number) | (string extends boolean ? never : string)
// 4. 조건을 평가
type G4 = never | number | string
// 5. 단순화
type G5 = number | string

// infer키워드 : 조건부 타입에서 제네릭타입을 인라인으로 선언하는 전용 문법에 사용하는 키워드
// 조건부 타입의 마지막 특성으로 조건의 일부를 제네릭 타입으로 선언할 수 있는 기능
type ElementType<T> = T extends unknown[] ? T[number] : T
type H = ElementType<number[]> // number

type ElementType2<T> = T extends (infer U)[] ? U : T
type I = ElementType2<number[]> // number

// 내장 조건부 타입
// 1. Exclude<T, U> : T에는 속하지만 U에는 없는 타입을 구한다.
type J = number | string
type K = string
type L = Exclude<J, K> // number

// 2. Extract<T, U> : T의 타입 중 U에 할당할 수 있는 타입을 구한다.
type M = number | string
type N = string
type O = Extract<M, N> // string

// 3. NonNullable<T> : T에서 null과 undefined를 제외한 버전을 구한다.
type P = { a: number | null }
type Q = NonNullable<P['a']> // number

// 4. ReturnType<F> : 함수의 반환타입을 구한다.
type R = (a: number) => string 
type S = ReturnType<R> // string

// 5. InstanceType<C> 클래스 생성자의 인스턴스 타입을 구한다.
type T = { new(): U } 
type U = { b: number }
type V = InstanceType<T> // {b: number}