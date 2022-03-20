// 자바스크립트 에서 객체 생성
// const pt ={};
// pt.x = 3;
// pt.y = 4;

// 타입스크립트에서는 오류가 발생한다.
interface Point {
    x: number;
    y: number;
}
// const pt: Point = {};
// pt.x = 3;
// pt.y = 4;

const pt = {
    x: 3,
    y: 4
}

// 객체를 제각각 만들어야 한다면 as(단언문)을 사요해서 타입체커를 통과하게 가능하다.
const pt2 = {} as Point;
pt2.x = 3;
pt2.y = 4;

// 하지만 선언할 때 객체를 한꺼번에 만드는게 낫다. 작은 객체를 조합해서 큰 객체를 만들어야 하는 경우에도 여러 단계를 거치는 것은 좋은 생각이 아니다.
const id = { name: 'Puthagoras'};

const namedPoint = {}
Object.assign(namedPoint, pt, id);
// namedPoint.name -> 에러 발생

// 객체 전개 연산자를 사용하면 타입 걱정 없이 필드 단위로 객체를 생성할 수도 있습니다. 이 때 모든 업데이트마다 새 변수를 사용하여 각각 새로운 타입을 얻도록 하는게 중요하다.
const namedPoint2 = {...pt, ...id}
namedPoint2.name; // 정상

// 조건부 속성을 추가하는 방법
declare let hasMiddle: boolean;
const firstLast = { first: 'Harry', last: 'Truman' };
const president = {...firstLast, ...( hasMiddle ? { middle: "S" } : {})};

// const president: {middle?: string | undefined, first: string, last: string}로 타입이 추론된다.

declare let hasDate: boolean;
const nameTitle = { name: 'Khufu', title: 'Pharaoh' };
const pharaoh = {
    ...nameTitle,
    ...(hasDate ? { start: -2589, end: -2566 }: {}),
}
//const pharaoh: {start?: number | undefined, end?: number | undefined, name: string, title: string}