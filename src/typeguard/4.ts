interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function act(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
