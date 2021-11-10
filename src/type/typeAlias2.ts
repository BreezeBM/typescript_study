type Shape = 'Circle';

function foo() {
    let x = Math.random() < .5;
    if (x) {
        type Shape = 'Square';
        let y: Shape = 'Square';
        console.log(y)
    } else {
        let z: Shape = 'Circle'
        console.log(z)
    };
};

foo();