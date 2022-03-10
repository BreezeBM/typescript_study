function distance(a: {x: number, y: number}, b: {x: number, y: number}) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

interface Point2D {
    x: number;
    y: number;
}

function distance2(a: Point2D, b: Point2D) {
    return //...
}

// 인터페이스의 중복을 제거하고 확장
interface Person {
    firstName: string;
    lastName: string
}
interface PersonWithBirthDay extends Person {
    birth: Date
}

// 타입의 경우는 &를 쓸 수 있다.
// @ts-ignore
type Human = {
    firstName: string,
    lastName: string
}
type HumanWithBirthDay = Human | { birth: Date }

// 전체 애플리케이션 상태를 나타내는 State타입과 부분을 표현하는 TopNavState가 있다.
interface State {
    userId: number;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}

// TopNavState를 확장해서 State를 표현하기 보다는 State의 부분집합으로 TopNavState를 정의하는 것이 좋아 보인다.
type TopNavState = {
    userId: State['userId'];
    pageTitle: State['pageTitle'];
    recentFiles: State['recentFiles'];
}

// 여전히 중복이 존재
type TopNavState2 = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};
// 매핑된 타입은 배열의 필드를 루프 도는 것과 같은 방식이다. 이 패턴은 표준 라이브러리에서도 일반적으로 찾을 수 있고, Pick이라고 한다.

// type Pick<T, K> = { [k in K]: T[K]}
type TopNavState3 = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;

interface SaveAction {
    type: 'save';
    //...
}

interface LoadAction {
    type: 'load';
    //...
}

type Action = SaveAction | LoadAction;
type ActionType = 'save' | 'load'; // 타입의 반복

// ACtion 유니온을 인덱싱하면 타입 반복 없이 ACtions Type을 정의할 수 있다.

type ActionType2 = Action['type'];

type ActionRec = Pick<Action, 'type'>; // {type: "save" | "load"}

interface Options {
    width: number;
    height: number;
    color: string;
    label: string;
}
interface BadOptionsUpdate {
    width?: number;
    height?: number;
    color?: string;
    label?: string;
}

type CoolOptionsUpdate = {[k in keyof Options]?: Options[k]}

// keyof 는 타입을 받아서 속성 타입의 유니온을 반환합니다. -> Partial이라는 옵션이 있음
type OptionsKeys = keyof Options;
// 타입이 "width" | "height" | "color" | "label"

function getUserInfo(userId: string) {
    if (userId === '1') return false;

    const name = 'Xen';
    const age =  27;
    const height = "183";

    return {
        userId,
        name,
        age,
        height
    };
};
// 추론되는 반환 타입은 { userId: number, name: string, age: number, height: string}
// 이런 경우 ReturnType 제너릭이 정확히 맞다.
type UserInfo = ReturnType<typeof getUserInfo>;