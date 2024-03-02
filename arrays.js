let house = ["1bhk", 25000, "2bhk", 50000, "3bhk", true];
console.log(house[0]+" cost= "+house[1]);

let array = [1, 2, 3, 4, 5, 6]
for(let i = 0; i < array.length; i++){
  console.log(array[i])
}

// Array and while loop:
let index = 0
while(index < array.length){
  console.log(array[index])
  index++;
}

array.forEach(myFunction);

function myFunction(item){
  console.log(item);
}

