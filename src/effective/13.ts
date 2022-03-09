type TState = {
    name: string;
    capital: string;
}

interface IState {
    name: string;
    capital: string;
}

// type과 interface 둘 다 추가 속성과 함께 할당하면 동일한 오류가 발생한다.
const Ben: TState = {
    name: 'Ben',
    capital: 'Seoul',
    // age: 22
}

const Ven: IState = {
    name: 'Ven',
    capital: 'Deoul'
    // age: 22
}

// 인덱스 시그니처는 인터페이스와 타입에서 모두사용할 수 있다.
type TDict = { [key: string]: string }
interface IDict {
    [key: string]: string
}

// 또한 함수 타입도 인터페이스나 타입으로 정의할 수 있다.
type TFn = (x: number) => string;
interface IFn {
    (x: number): string
}

const toStrT: TFn = x => '' + x
const toStrI: IFn = x => '' + x

// 타입 별칭과 인터페이스는 모두 제네릭이 가능하다
type TPair<T> = {
    first: T;
    second: T;
}

interface IPair<T> {
    first: T;
    second: T;
}

// 인터페이스는 타입을 확장할 수 있으며, 타입은 인터페이스를 확장할 수 있습니다.
interface IStateWithpop extends TState {
    population: number;
}
type TStateWithPop = IState & { popultion: number }
// 인터페이스는 유니온 타입으로 확장이 불가

// 클래스를 구현할 때는 타입과 인터페이스 둘다 가능
class StateT implements TState {
    name: string = '';
    capital: string = '';
}

class StateI implements  IState {
    name: string = '';
    capital: string = '';
}

type Input = {
    input: string;
}

type Output = {
    output: string
}

interface IOI {
    [name: string]: Input | Output
}

type IOT = (Input | Output) & { name: string }

// 보강 기법 -> 선언병합
interface IIState {
    name: string;
    capital: string;
}
interface IIState {
    population: number
}

const Ten: IIState = {
    name: 'Ten',
    capital: 'Feoul',
    population: 500_000
}
