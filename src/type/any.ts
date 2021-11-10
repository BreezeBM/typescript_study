// any를 사용하면 값이 자바스크립트처럼 동작하기 시작하면서 타입 검사기라는 마법이 더 이상 작동하지 않게 된다.
let num: any = 777;
let arr: any = ['lucky']; 
let sum = num + arr;