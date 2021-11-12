export {}
type State = {
    [key: string]: string,
};

class StringDatabase {
    state: State = {}
    get(key: string): string | null {
        return key in this.state ? this.state[key] : null;
    };
    set(key: string, value: string): void {
        this.state[key] = value
    };
    static from(state: State) {
        let db = new StringDatabase;
        for(let key in state) {
            db.set(key, state[key])
        };
        return db
    };
};

// 인스턴스 타입은 다음과 같다.
interface StringDatabase {
    state: State,
    get(key: string): string | null,
    set(key: string, value: string): void
}

// typeof StringDatabase의 생성자 타입
// new() 생성자 시그니처,
interface StringDatabaseConstructor {
    new(): StringDatabase
    from(state: State): StringDatabase
}

// class myMap<K, V> {
//     constructor(initialKey: K, initialValue: V) {
//         //...
//     }
//     get(key: K): V {
//         //...
//     }
//     set(key: K, value: V): void {
//         //...
//     }
//     merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
//         //...
//     }
//     static of<K, V>(k: K, v: V): MyMap<K, V> {
//         //...
//     }
// }