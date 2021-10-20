// function add50(x: string | number){
//   console.log(x + 50);
// }

// add100("100");
// add100(100);

function add100(x: string | number) {
  if (typeof x === "string") {
    console.log(Number(x) + 100);
  }
  console.log(x);
}

add100("100");
add100(100);
