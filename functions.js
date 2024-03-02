function foo(bar){
  console.log(bar)
}

foo("BananaFish")
foo("Chainsaw Man")

// Anonymous function are the functions which can be passed to a variable without having it's own identity.
let anonymousFunction = function(){
  console.log("Hello World")
};

anonymousFunction();

// Passing arguments in Anonymous functions
let greet = function(foo){
  console.log("Welcome to ", foo)
}

greet("NHK");

//Self excecuting functions with timer
setTimeout(function(){
  console.log("Welcome to Falconia")
}, 2000);

// Another self excecuting functions 
(function(){
  console.log("Welcome to Chainsaw Man")
})();

// Arrow functions
let manga = () => console.log("Vagabond");
manga();
