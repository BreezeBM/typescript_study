interface Bird {
  leg: 2;
  fly(): void;
}

interface Fish {
  spin: boolean;
  swim(): void;
}

// bird => true
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function doSomething(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}
