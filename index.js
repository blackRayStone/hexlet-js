import _ from "lodash";
console.log("FINE!");

let a = 10;
let b = 15;

const sum = (a, b) => {
  return a + b;
};

console.log(sum(a, b));

console.log(_.capitalize("hello"));
console.log(_.last(["one", "two"]));
