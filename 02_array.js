let name = ['denji', 'makima', 'aki', 'power', 'quanxi']
a = name.includes('denji');
console.log(name.includes('santa'));
console.log(a)
console.log(name.sort());

// Sort functions in javascript usage:

function arr_func(){
  let arr = [3, 5, 9, 2, 0, 1]
  console.log(arr.sort())
  console.log(arr) // 
}

arr_func();


function func() {

// Original array
var arr = [2, 5, 8, 1, 4];
console.log(arr.sort(function(a, b) { // This JavaScript function func() sorts the array arr using a custom sorting function. The sorting function calculates the value a + 2 * b for each pair of elements a and b in the array and sorts the array based on these calculated values.
return a + 2 * b;
}));
console.log(arr);
}

func();
