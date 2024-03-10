let arr = ['a', 'b', 'c']
let arr2 = [...arr]
arr2.push('d')

// console.log(arr2)


let array1 = [11, 12, 13, 14]
// console.log(array1.push(1, 2, 3, 4))
// console.log(array1)

// console.log(array1.push('jacob', true, 23, 45))
// console.log(array1)


function func(){
  let array2 = [10, 20, 30, 40]
  console.log(array2.push(50, 60, 70, 80))
  console.log(array2.pop())
  console.log(array2)
}
// func();

function func2(){
  let array3 = [1, 2, 3, 4]
  let popped = array3.pop()
  console.log(popped)
  console.log(array3)
}

// func2();


function func3(){
  let array4 = [11, 12, 13, 14, 15, 16]
  let new_arr = array4.slice(2, 4)
  console.log(new_arr);
  console.log("<------------------------br------------------------->")
  console.log(array4)
}
// func3();

function func4(){
  let arr1 = [11, 12, 13, 14, 15, 16]
  let new_arr = arr1.slice(2)
  console.log(new_arr)
  console.log("<------------------------br------------------------->")
  console.log(arr1)
}

func4();
