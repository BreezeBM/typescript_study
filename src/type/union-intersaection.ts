export {}
type Cat = { name: string, purrs: boolean };
type Dog = { name: string, barks: boolean, wags: boolean };
type CatOrDogBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

let a: CatOrDogBoth = {
    name: 'Happy',
    purrs: true,
};

// 고양이
a = {
    name: 'Gga-Mang-E',
    purrs: true,
};

// 강아지
a = {
    name: 'Co-Co',
    barks: true,
    wags: true,
}

// ???
a = {
    name: 'æ-Co-Co',
    purrs: false,
    barks: true,
    wags: false
}

// ??????????
let b: CatAndDog = {
    name: 'æ-Gga-Mang-E',
    purrs: true,
    barks: true,
    wags: true
}