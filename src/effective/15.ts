const rocket = {
    name: 'Falcon',
    variant: 'Block 5',
    thrust: '7,607 kN'
};

type Rocket = { [property: string]: string} // 인덱스 시그니처
const rocket2: Rocket = {
    name: 'Falcon',
    variant: 'v1.0',
    thrust: '4,940 kN'
}

/*
* 키의 이름: 키의 위치만 표시하는 용도, 타입 체커에서는 사용하지 않는다.
* 키의 타입: string이나 number 또는 symbol의 조합이어야 하지만 보통 string을 사용한다
* 값의 타입: 어떤 것이든 된다.
* 하지만 단점이 존재한다.
* */

interface RocketI {
    name: string;
    variant: string;
    thrust: number;
}
const falconHeavy: RocketI = {
    name: 'Falcon Heavy',
    variant: 'v1',
    thrust: 15_200
}
// 자동완성, 정의로 이동, 이름 바꾸기 모두 동작함

// 인덱스 시그니처는 동적 데이터를 표현할 때 사용

function parseCSV(input: string): {[columnName: string]: string}[] {
    const lines = input.split('/n');
    const [header, ...rows] = lines;
    const headerColumns = header.split(',');
    return rows.map(rowStr => {
        const row: {[columnName: string]: string} = {};
        rowStr.split(',').forEach((cell,i) => {
            row[headerColumns[i]] = cell;
        })
        return row;
    })
}

interface ProductRow {
    productId: string;
    name: string;
    price: string;
}

declare let csvData: string;
const products = parseCSV(csvData) as unknown as ProductRow[];

// Record Type
type Vec3D = Record<'x' | 'y' | 'z', number>;
/*
{x: number, y: number, z: number}
* */

type ABC = {[k in 'a' | 'b' | 'c']: k extends 'b' ? string : number};
/*
{a: "number", b: "string", c: "number"}
* */