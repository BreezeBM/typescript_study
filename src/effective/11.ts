interface Room {
    numDoors: number;
    ceilingHeightFt: number;
}

// 타입이 명시된 변수에 객체 리터럴을 할당할 때, 타입스크립트는 해당 타입의 속성이 있는지, 그리고 그 이외의 속성은 없는지 확인한다.
const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
    // elephant: 'present' -> 에러 발생
}

const obj = {
    numDoors: 1,
    ceilingHeightFt: 10,
    elephant: 'present'
}
const room: Room = obj // 정상
// obj의 타입을 {
//     numDoors: number;
//     ceilingHeightFt: number;
//     elephant: string;
// } 으로 간주

interface LineChartsOptions {
    logscale?: boolean;
    invertedYAxis?: boolean;
    areaChart?: boolean
}
const opts = {logScale: true}
// const o: LineChartsOptions = opts -> 에러가 발생
// 구조적 관점에서 LineChartOptions 타입은 모든 속성이 선택적이므로 모든 객체를 포함할 수 있다.
// 이런 약한 타입에 대해서 타입스크립트는 값 타임과 선언 타입에 공통된 속성이 있는지를 확인하는 별도의 체를 수행한다.