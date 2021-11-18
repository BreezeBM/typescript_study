export {}

// 종합성, 철저 검사(exhausitveness checking)라고 불리는 종합성은 필요한 모든 상황을 제대로 처리했는지 타입 검사기가 검사하는 기능이다.
// 타입스크립트는 다양한 상황의 모든 가능성을 확인하며, 빠진 상황이 있다면 이를 경고한다.

type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu'| 'Fri'
type Day = Weekday | 'Sat' | 'Sun'

// 코드에서 처리하지 않은 상황이 있거나 어떤 상황이든 대처할 수 있는 반환문을 함수 마지막에 추가해야한다고 말해준다.
// function getNextDay(w: Weekday): Day { // unction lacks ending return statement and return type does not include 'undefined'
//     switch(w) {
//         case 'Mon': return 'Tue'
//     }
// }

function getNextDay(w: Day): Day { 
    switch(w) {
        case 'Mon': return 'Tue'
        case 'Tue': return 'Wed'
        case 'Wed': return 'Thu'
        case 'Thu': return 'Fri'
        case 'Fri': return 'Sat'
        case 'Sat': return 'Sun'
        case 'Sun': return 'Mon'
    }
}

// Not all code paths return a value. => noImplicitReturns
function isBig(n: number) {
    if(n >= 100) return true
}

let NextDay = {
    Mon: 'Tue'
}

NextDay.Mon // => 'Tue'