export {}
// null => 값이 없음
function a(x: number) {
    if (x < 10) {
        return x;
    };
    return null;
};

// undefined => 정의되지 않음
function b() {
    return undefined;
};

// void => 아무것도 반환하지 않음
function c() {
    let a = 2 + 2;
    let b = a * a;
};

// never => 절대 반환하지 않는(예외를 던지거나, 영원히 실행되는 함수 타입에 사용)
function d() {
    throw TypeError("ERROR!");
};

function e() {
    while(true) {
        // ...
    }
}
