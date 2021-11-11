export {}
// function newArr(array, foo) {
//     let arr = [];
//     for(let i = 0; i < array.length; i ++) {
//         let el = array[i];
//         if(foo(el)) {
//             arr.push(el);
//         };
//     };
//     return arr;
// }

// newArr([1, 2, 3, 4, 5], () => () < 4) // [1, 2, 3]

// type NewArr = {
//     (array: number[], foo: (arg: number) => boolean): number[],
//     (array: string[], foo: (arg: string) => boolean): string[],
//     (array: object[], foo: (arg: object) => boolean): object[],
// };

// 제네릭 : 여러장소에 타입 수준의 제한을 적용할 때 사용하는 플레이스홀더 타입. 다형성 타입 매개변수라고 부른다. 

type NewArr = {
    <T>(array: T[], foo: (arg: T) => Boolean): T[]
};

let newArr: NewArr = (array, foo) => {
    let arr = [];
    for(let i = 0; i < array.length; i ++) {
        let el = array[i];
        if(foo(el)) {
            arr.push(el);
        };
    };
    return arr;
}

newArr([1, 2, 3, 4, 5, 6, 7], (_ => _ % 2 ? true : false)) // [ 1, 3, 5, 7 ]
newArr(['x', 'y', 'z'], _ => _ !== 'z'); // [ 'x', 'y' ]

let city = [
    {name: "Seoul"},
    {name: "Busan"},
    {name: "Jeju"}
];

newArr(city, _ => _.name.startsWith('J')); // [ { name: 'Jeju' } ]

// T의 범위를 타입별칭으로 한정하려면 newArra2를 사용할 타입을 명시적으로 한정하게 해야한다.
type NewArr2<T> = {
    (array: T[], foo: (arg: T) => Boolean): T[]
};

// let newArr2: NewArr2<number> = (array, foo) => {
//     //...
// }

type NewStringArr = NewArr2<string>;
// let newStringArr: NewStringArr = (array, foo) => {
//     //...
// } 

// 제네릭 선언
type One = {
    <T>(array: T[], foo: (arg: T) => Boolean): T[]
}

type Two<T> = {
    (array: T[], foo: (arg: T) => Boolean): T[]
}

type Three = <T>(array: T[], foo: (arg: T) => Boolean) => T[];

type Four<T> = (array: T[], foo: (arg: T) => Boolean) => T[];

// function five<T>(array: T[], foo: (arg: T) => Boolean): T[] {
//   //...
// }

// function map(array: unknown[], foo: (arg: unknown) => unknown): unknown[] {
//     let mapArr = [];
//     for (let i = 0; i < array.length; i ++) {
//         mapArr[i] = foo(array[i])
//     } 
//     return mapArr;
// }

// 인수 배열 맴버의 타입을 대변하는 T, 반환 되는 배열 멤버 타일을 대변하는 U
// T: string, U: boolean으로 추론
function map<T, U>(array: T[], foo: (arg: T) => U): U[] {
    let mapArr = [];
    for (let i = 0; i < array.length; i ++) {
        mapArr[i] = foo(array[i])
    }
    return mapArr;
} ;

// 제네릭 타입을 명시할 때는 모든 필요한 제네릭 타입을 명시하거나, 반대로 아무것도 명시해서는 안된다.
map(['x', 'y', 'z'], _ => _ === 'x');
map<string, boolean>(['x', 'y', 'z'], _ => _ === 'x');
// map<string>(['x', 'y', 'z'], _ => _ === 'x');

// let promise = new Promise(resolve => 
//     resolve(45)
// )
// promise.then(result => result * 4) => 추론을 숫자로 하지 않음

// Promise의 제네릭타입 매개변수를 명시해서 해결한다.
let promise = new Promise<number>(resolve => 
    resolve(10)
);
promise.then( result => 
  result * 10
);

type TreeNode = {
    value: string
};

type LeafNode = TreeNode & {
    isLeaf: true
};

type InnerNode = TreeNode & {
    children: [TreeNode] | [TreeNode, TreeNode]
};

let a: TreeNode = { value: 'a' };
let b: LeafNode = { value: 'b', isLeaf: true};
let c: InnerNode = { value: 'c', children: [b]};

// T extends TreeNode로 표현함으로써 입력 노드가 특정 타입(TreeNode, LeafNode, InnerNode)라는 정보를 보존할 수 있다.
function mapNode<T extends TreeNode>(node: T, foo: (value: string) => string): T {
    return {
        ...node,
        value: foo(node.value)
    }
};

let a1 = mapNode(a, _ => _.toUpperCase());
let b1 = mapNode(b, _ => _.toUpperCase());
let c1 = mapNode(c, _ => _.toUpperCase());

// console.log(a1, b1, c1) => { value: 'A' } { value: 'B', isLeaf: true } { value: 'C', children: [ { value: 'b', isLeaf: true } ] }

// T는 unknown의 서브타입 즉 어떤 타입의 배열 또는 튜플이다.
function call<T extends unknown[], R>(
    f: (...args: unknown[]) => unknown,
    ...args: unknown[]
): unknown {
    return f(...args)
}

function fill(length: number, value: string): string[] {
    return Array.from({ length }, () => value)
}
