function printTriangles(n: number) {
    const nums = [];
    for (let i = 0; i < n; i ++) {
        nums.push(i);
        console.log(arraySum(nums))
    }
    return nums
}

// nums를 초기화 시킨다.
// function arraySum(arr: number[]) {
//     let sum = 0, num;
//     while((num = arr.pop()) !== undefined) {
//         sum += num;
//     }
//     return sum;
// }

// readonly []는 배열을 변경하는 pop을 비롯한 다른 메서드 호출 x
// function arraySum(arr: readonly number[]) {
//     let sum = 0
//     while((num = arr.pop()) !== undefined) {
//         sum += num;
//     }
//     return sum;
// }

function arraySum(arr: readonly number[]) {
    let sum = 0;
    for(let i = 0; i < arr.length; i ++) {
        sum += arr[i];
    };
    return sum;
}
console.log(printTriangles(5))

// let과 변환이 없는 메서드로 변경
function parseTaggedText(lines: string[]): string[][] {
    let currPara: readonly string[] = [];
    // paragraphs의 반환 타입을 readonly string[]으로 변경하는 방법
    // const paragraphs = (readonly string[])[] = [];
    // 변경가능한 배열의 readonly배열이다.
    const paragraphs: string[][] = [];

    const addParagraph = () => {
        if(currPara.length) {
            // currPara의 복사본을 만드는 방법
            paragraphs.push([...currPara]);
            // readonly를 제거하기 위해 단언하는 방법
            // paragraphs.push(currPara as string[]);
            currPara = [];
        }
    };

    for(const line of lines) {
        if(!line) {
            addParagraph()
        } else {
            currPara.concat([line])
        }
    }
    addParagraph()
    return paragraphs;
}

// readonly는 shallow하게 동작하는 것에 유의 해야 한다.
const dates: readonly Date[] = [new Date()];
// dates.push(new Date()); -> 에러 발생
dates[0].setFullYear(2023)

// Readonly 제네릭
interface Outer {
    inner: {
        x: number
    }
}
const o: Readonly<Outer> = { inner: {x: 0}};
// o.inner = {x: 1} -> 에러 발생
o.inner.x = 1; // 정상 동작

// typt T = Readonly<Outer>
// Type T = {
//     readonly inner: {
//         x: number;
//    }
// }

// readonly는 inner에만 적용되고 x에는 적용이 되지 않는다.