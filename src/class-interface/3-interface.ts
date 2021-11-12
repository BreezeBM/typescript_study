export {}

// Robot이라는 타입 별칭을 사용한 모든 곳에 Sushi 인터페이스를 대신 사용할 수 있다.
// type Robot = {
//     model: string,
//     manufacture: string,
//     battery: number
// }

// type Machine {
//     model: string,
//     manufacture: string,
// }

// type MobilePhone = Machine & {
//     user: string
// };

// type Robot = Machine & {
//     battery: number
// };

interface Machine {
    model: string,
    manufacture: string,
}

interface MobilePhone extends Machine {
    user: string
};

interface Robot extends Machine {
    battery: number
};
// 인터페이스는 객체 타입, 클래스, 다른 인터페이스 모두를 상속받을 수 있다. 

// 선언 합침(declaration merging)
interface User {
    name: string
};

interface User {
    age: number
};

let user: User = {
    name: "Kelly",
    age: 30
}

// 타입별칭으로 사용하면 에러가 발생
// type User1 = {
//     name: string
// }

// type User1 = {
//     age: number
// }

// 인터페이스의 프로퍼티끼리 충동해서는 안된다.

// implements
// private, protected, public 선언 불가, static 사용 불가, readonly 가능
interface Person {
    readonly age: number,
    showName(name: string): void,
    showCity(city: string): void
}

class Person1 implements Person {
    age = 33
    showName(name: string) {
        console.log(`Hello ${name}!`);
    };
    showCity(city: string) {
        console.log(`What a nice ${city}!`)
    }
    // 추가적인 프로퍼티나 메서드 구현 가능
}

// 여러 인터페이스 구현 가능
interface Job {
    sayHello(): void
}

class Person2 implements Person, Job {
    age = 33;
    showName(name: string) {
        console.log(`Hello ${name}!`);
    };
    showCity(city: string) {
        console.log(`What a nice ${city}!`)
    };
    sayHello() {
        console.log(`Hello`)
    }
}