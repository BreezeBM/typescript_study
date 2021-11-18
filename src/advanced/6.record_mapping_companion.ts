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
let nextDay: { [K in Weekday ]: Day} = {
    Mon: 'Tue',
    Tue: 'Wed',
    Wed: 'Thu',
    Thu: 'Fri',
    Fri: 'Sat',
}

// 인덱스 시그니처와 마찬가지로 한 객체당 최대 한개의 매핑된 타입을 가질 수 있다.