export {}
// null 반환
function ask() {
    return 'When is your birthday?'
}

function parse(birthday: string): Date | null {
    let date = new Date(birthday)
    if (isValid(date)) return null
    return date
}

function isValid(date: Date) {
    return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTime())
}

let date = parse(ask())
if (date) console.info('Date is', date.toISOString()) 
else console.error('Error parsing date for some reason')

// 예외 던지기
// 문제가 발생하면 null 대신 예외를 던진다.
function parse2(birthday: string): Date {
    let date = new Date(birthday)
    if (isValid(date)) throw new RangeError('Enter a date in the form YYYY/MM/DD')
    return date
}

// try{
//     let date = parse(ask())
//     console.info('Date is', date!.toISOString())
// } catch(e){
//     console.error(e)
// }

// 다른 에러가 발생했을 때 무시하지 않도록 처리하지 않은 에러는 다시 던진다.
// try{
//     let date = parse(ask())
//     console.info('Date is', date!.toISOString())
// } catch(e){
//     if(e instanceof RangeError) console.error(e.message)
//     else throw e
// }

// 나중에 다른 형태의 RangeError를 던질 수 있기 때문에 에러를 서브클래싱 하여 더 구체적으로 표현
// 커스텀 에러
class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

/**
 * @throws {InvalidDateFormatError} 사용자가 생일을 잘못 입력함
 * @throws {DateIsInTheFutureError} 사용자가 생일을 미래 날짜로 입력함
 */

function parse3(birthday: string): Date {
    let date = new Date(birthday)
    if(!isValid(date)) throw new InvalidDateFormatError('Enter a date in the form YYYY/MM/DD')
    if(date.getTime() > Date.now()) throw new DateIsInTheFutureError('Are U A TimeLORD?')
    return date
}

try{
    let date = parse(ask())
    console.info('Date is', date!.toISOString())
} catch(e){
    if(e instanceof InvalidDateFormatError) console.error(e.message)
    else if(e instanceof DateIsInTheFutureError) console.info(e.message)
    else throw e
}

// 예외반환 
// 타입스크립트는 throws문을 지원하지 않는다. 하지만 유니온 타입으로 흉내낼 수 있따.
function parse4(birthday: string): Date | InvalidDateFormatError | DateIsInTheFutureError {
    let date = new Date(birthday)
    if(!isValid(date)) return new InvalidDateFormatError('')
    if(date.getTime() > Date.now()) return new DateIsInTheFutureError('')
    return date
}

// let result = parse4(ask())
// if (result instanceof InvalidDateFormatError) ...
// else if (result instanceof DateIsInTheFuture) ...


// let result = parse4(ask())
// if (result instanceof Error) ...
