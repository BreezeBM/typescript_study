export {}

// let set = new Set;
// set.add(1).add(2).add(3);
// set.has(2); // true
// set.has(4); // false

// class Set {
//     has(value : number): boolean {
//         // ...
//     },
//     add(value: number): Set {
//         //...
//     }
// }

// Set의 add메서드에서는 여전히 Set을 반환하기 때문에 자식클래스인 MutablSet을 반환하도록 오버라이드 한다.
// 자식 클래스는 this를 반환하는 모든 메서드의 시그니처를 오버라이드 해야하는 귀찮음이 생겼다.
// class MutableSet extends Set {
//     delete(value: number): boolean {
//         //...
//     },
//     add(value: number): MutableSet {
//         //...
//     }
// }

// class Set {
//     has(value : number): boolean {
//         // ...
//     },
//     add(value: number): this {
//         //...
//     }
// }

// this로 지정하게 되면, Set의 this는 Set인스턴스를 MutableSet의 this는 MutableSet인스턴스를 자동으로 가르킨다. 그래서 add를 오버라이드 할 필요가 없다.

// class MutableSet extends Set {
//     delete(value: number): boolean {
//         //...
//     },
// }