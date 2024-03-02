function myFunction(){
  let a = 5, b = 7;
  return a+b
}

console.log(myFunction())

// Using arrow functions
const newFunc = () => {
  let a = 1, b = 2;
  return a + b
}

console.log(newFunc())

// Another arrow functions
const func2 = (num) => num*num;

console.log(func2(4));

let obj = {
  num: 10,
  myFunc: () => {console.log(this.num)}
}

obj.myFunc(); // This is a limitation of the arrow fumction as it only refer to the objects within it's scope and it does not have num in it.

// More example of the arrow function.
const start = (x, y) => x+y
const output = start(12, 13)
console.log(output)
