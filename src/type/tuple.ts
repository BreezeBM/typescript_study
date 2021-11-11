export {}
// 튜플은 배열의 서브 타입
let a: [number] = [1];

let b: [string, number, boolean] = ["String", 1234, true];
// b = ["Hello", "Stranger", 123] => number가 들어와야 하는 자리에 stranger라는 문자열이 들어옴
// b = ["Hi", 1234, true, 'bye'] => b는 문자열, 숫자, 불리언 3개로 이루어진 타입인데, 4개가 들어옴

// 선택형 요소를 지원
let busStopTime: [string, string?][] = [
    ["13:50"],
    ["14:15", "14:40"],
    ["15:30"]
];

// 같은 표현
let busStopTime2: ([string] | [string, string])[];

// 최소 길이를 표현할 때는 RestParameter ... 사용
// 최소 한개의 요소를 갖는 number배열
let c: [number, ...number[]] = [1, 2, 3, 4, 5];
let d: [number, boolean, ...string[]] = [6, true, 'A', 'B', 'C']

// readonly는 내용을바꾸는 동작인 push splice는 사용안되고, concat splice를 사용해야함
let ra: readonly number[] = [1, 2, 3];
let rb: readonly number[] = ra.concat(4);
let three = rb[2];
// ra[4] = 5 => Index signature in type 'readonly number[]' only permits reading.
// ra.push(4) => Property 'push' does not exist on type 'readonly number[]'

type A = readonly string[];
type B = ReadonlyArray<string>; 
type C = Readonly<string[]>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;