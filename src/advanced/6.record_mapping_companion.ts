export {}
// record 타입
// 무언가를 매핑하는 용도롤 활용할 수 있다. 객체가  특정 키 집합을 정의하도록 강제하는 방법
type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu'| 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

// Type '{ Mon: "Tue"; }' is missing the following properties from type 'Record<Weekday, Day>': Tue, Wed, Thu, Fri 
// let nextDay: Record<Day, Weekday> = {
//     Mon: 'Tue',
//     //...
// } 

// mappedType
// nextDay는 키로 weekday를 가지고 값으로 Day를 가진다.
let nextDay: { [K in Weekday ]: Day} = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
}

// 인덱스 시그니처와 마찬가지로 한 객체당 최대 한개의 매핑된 타입을 가질 수 있다.
type Account = {
    id: number,
    isEmployee: boolean,
    notes: string[]
}

type OptionalAccount = {
    [K in keyof Account]?: Account[K]
}

type NullableAccount = {
    [K in keyof Account]: Account[K] | null 
}

// 모든 필드를 읽기 전용으로 생성
type ReadonlyAccount = {
    readonly [K in keyof Account]: Account[K]
}

// 모든 필드를 다시 쓸 수 있도록 생성
// -로 readonly나, ?표시를 제거할 수 있다. 
// -로 readonly를 제거했다.
type Account2 = {
    -readonly [K in keyof ReadonlyAccount]: Account[K]
}

// 모든 필드를 필수형으로 생성
type Account3 = {
    [K in keyof OptionalAccount]-?: Account[K]
}

// +연산자도 있는데, 매핑된 타입에서 readonly는 이미 +readonly를 의미하고, ?는 +?를 의미한다.

// 내장 매핑 타입
// 1. Record<Keys, Values>
// Key타입의 키와 Values타입의 값을 갖는 객체

// 2. Partial<Object>
// Object의 모든 필드를 선택형으로 표시

// 3. Required<Object>
// Object의 모든 필드를 필수형으로 표시

// 4. Readonly<Object>
// Object의 모든 필드를 일기 전용으로 표시

// 5. Pick<Object, Keys>
// 주어진 Keys에 대응하는 Object의 서브타입을 반환

// 컴패니언 객체
// 스칼라에서 유래한 기능으로, 같은 이름을 공유하는 객체와 클래스를 쌍으로 연결한다. 
type Currency = {
    unit: 'KRW' | 'GBP' | 'EUR' | 'USD',
    value: number
}

let Currency: any = {
    DEFAULT: 'KRW',
    from(value: number, unit = Currency.DEFAULT): Currency {
        return { unit, value }
    }
}

// 타입스크립트에서 타입과 값은 별도의 네임스페이스를 가진다. 한번은 타입으로 한번은 값으로 두번 이름을 선언할 수 있다. 
// 해당 패턴을 사용하면 타입과 값의 정보를 Currency 같은 한개의 이름으로 그룹화 할 수 있다. 그리고 한번에 import할 수 있다.
// import해서 값으로 타입으로 사용가능