class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  hello() {
    console.log(`Hello, ${this.name}`);
  }
}

class Robot {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  hi() {
    console.log(`Hi, ${this.name}`);
  }
}

const human = new Human("GEE");
const robot = new Robot("æXXX");

function something(arg: Human | Robot) {
  if (arg instanceof Human) {
    return arg.hello();
  } else {
    return arg.hi();
  }
}

something(human);
something(robot);
