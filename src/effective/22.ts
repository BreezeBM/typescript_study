// 타입 좁히기
// null 체크
// const el = document.getElementById('foo'); // 타입이 HTMLElement | null
// if(el) {
//     el // 타입이 HTMLElement
//     el.innerHTML = 'party time'.blink();
// } else {
//     el // 타입이 null
//     alert('no element #foo')
// }

// 분기문에 예외를 던지거나 함수를 반환하여 블록 나머지 부분에서 변수의 타입을 좁힌다.
const el = document.getElementById('foo');
if(!el) throw new Error('Unable to find #foo');
el
el.innerHTML = 'Party Time'.blink()

// instanceof 사용
function contains(text: string, search: string | RegExp) {
    if(search instanceof RegExp) {
        search // 타입이 RegExp
        return !! search.exec(text)
    }
    search // 타입이 string
    return text.includes(search)
}

// 속성 체크
interface A {a: number}
interface B {b: number}
function pickAB(ab: A | B) {
    if('a' in ab) {
        ab // 타입이 A
    } else {
        ab // 타입이 B
    }
    ab // 타입이 A | B
}

// 일부 내장 함수 사용
function contains2(text: string, terms: string | string[]) {
    const termList = Array.isArray(terms) ? terms : [terms];
    termList // 타입이 string[]
}

// 잘못된 사용 예시1
const el2 = document.getElementById('foo'); // 타입이 HTMLElement | null
if(typeof el === 'object') {
    el; // 타입이 HTMLElement | null(도 object)
}

// 잘못된 사용 예시2
function foo(x?: number | string | null) {
    if(!x) {
        x; // 타입이 string | number | null | undefined
    }
}
// 빈문자열과 0 모두 false가 된다. 타입이 전혀 좁혀지지 않음