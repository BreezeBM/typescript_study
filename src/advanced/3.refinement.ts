export {}
// 타입정제

// CSS 규칙을 정의하는 내장 API가 있고 동료 개발자가 HTML 요소의 너비를 설정한다고 가정, 너비를 전달하면 이를 파싱하고 검증한다.

// 문자 리터럴 유니온으로 CSS 단위가 가질 수 있는 값을 설명
type Unit = 'cm' | 'px' | '%';

let units: Unit[] = [ 'cm', 'px', '%'];

function parseUnit(value: string ): Unit | null {
    for(let i = 0; i < units.length; i++) {
        if(value.endsWith(units[i])) {
            return units[i]
        }
    }
    return null;
}

type Width = {
    unit: Unit,
    value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
    // width가 null이거나 undefined면 일찍 반환
    if(width === null) {
        return null
    }

    // width가 숫제면 픽셀로 취급
    if(typeof width === 'number') {
        return { unit: 'px', value: width}
    }

    // width에서 단위 파싱
    // let unit = parseUnit(width)
    // if (unit) {
    //     return { unit, value: parseFloat(width)}
    // }

    return null
}

// 다른 예시
// type UserTextEvent = { value: string }
// type UserMouseEvent = { value: [number, number]}

// type UserEvent = UserTextEvent | UserMouseEvent

// function handle(event: UserEvent) {
//     if (typeof event.value === 'string') {
//         // event.value => string
//         return ;
//     }
//     // 위에서 typeof로 string을 확인했으므로 if 블록 이후에는 [number, number]여야 한다.
//     event.value // => [number, number]
// }

type HTMLInputElement = '' 
type HTMLElement = ''
// type UserTextEvent = { value: string, target: HTMLInputElement }
// type UserMouseEvent = { value: [number, number], target: HTMLElement}

// type UserEvent = UserTextEvent | UserMouseEvent

// function handle(event: UserEvent) {
//     if (typeof event.value === 'string') {
//         event.value // => string
//         event.target // => HTMLInputElement | HTMLElement !!!
//         return ;
//     }
//     event.value // => [number, number] 
//     event.target // => HTMLInputElement | HTMLElement !!!
// }
// event.target // => HTMLInputElement | HTMLElement 둘다 될 수 있는 이유는 UserTextEvent | UserMouseEvent 타입이 들어올 수 있다. 

// 이럴 때에는 태그를 사용하는 방식으로 처리한다.
type UserTextEvent = { 
    type: 'TextEvent',
    value: string, 
    target: HTMLInputElement 
}
type UserMouseEvent = { 
    type: 'MouseEvent'
    value: [number, number], 
    target: HTMLElement
}