export {}
let a = [1, 2, 3];
var b = ['a', 'b'];
const c: string[] = ['c', 'd'];
let d = [4, 'e']; // number || string
const e = [5, 'f'];

let f = ['blue'];
f.push('orange');
// f.push(1) => Argument of type 'number' is not assignable to parameter of type 'string'.
// f.push(true) => Argument of type 'boolean' is not assignable to parameter of type 'string'

let g = []; // any[]로 추론
g.push(1);
g.push('Dog');
g.push(true);

let h: number[] = [];
h.push(7);
// h.push('7') => Argument of type 'string' is not assignable to parameter of type 'number'.

let i: Array<string> = [];
i.push('new way');
// i.push(false)

// 배열이 정의된 영역을 벗어나면 타입스크립트는 배열을 더 이상 확장할 수 없도록 최종타입을 할당한다.
function makeArray() {
    let arr = [] // any[]
    arr.push("Hello! Welcome to Route")
    arr.push(99)
    return arr;
};

let newArr = makeArray(); // string || number
// newArr.push(false) => Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
