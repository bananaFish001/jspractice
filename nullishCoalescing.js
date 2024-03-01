/*
function foo(bar){
  bar = bar || 42;
  console.log(bar);
}
foo();

*/
// above statement "bar = bar || 42" will create problem as it will assign false value to 0 or empty string;
function foo(bar){
  bar = bar ?? 42
  console.log(bar);
}
foo(0);
