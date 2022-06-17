// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
  }
  sayHello();

  function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }
  sayHelloToGuadalupe();

  function sayHelloToLiz() {
    console.log("Hello, Liz!");
  }
  sayHelloToLiz();

  function sayHelloToSamip() {
    console.log("Hello, Samip!");
  }
  sayHelloToSamip();

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
say("Goodbye", "Julio");

function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9000));