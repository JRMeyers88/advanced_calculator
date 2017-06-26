
// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

var outputAnswer = document.getElementById("answerBox");

var addBut = document.getElementById("add");
  addBut.addEventListener("click", addEm);
var subtractBut = document.getElementById("subtract");
  subtractBut.addEventListener("click", subtractEm);
var multiplyBut = document.getElementById("multiply");
  multiplyBut.addEventListener("click", multiplyEm);
var divideBut = document.getElementById("divide");
  divideBut.addEventListener("click", divideEm);

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
 function multiplyEm() {
  var first = document.getElementById("firstNum").value;
  var second = document.getElementById("secondNum").value;
  outputAnswer.innerHTML = parseInt(first)*parseInt(second);
  console.log("multiply", multiplyEm);
 }

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addEm() {
  var first = document.getElementById("firstNum").value;
  var second = document.getElementById("secondNum").value;
  outputAnswer.innerHTML = parseInt(first) + parseInt(second);
  console.log("add", addEm);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 function subtractEm() {
  var first = document.getElementById("firstNum").value;
  var second = document.getElementById("secondNum").value;
  outputAnswer.innerHTML = parseInt(first) - parseInt(second);
  console.log("sub", subtractEm);
 }

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideEm() {
  var first = document.getElementById("firstNum").value;
  var second = document.getElementById("secondNum").value;
  outputAnswer.innerHTML = parseInt(first) / parseInt(second);
  console.log("divide", divideEm);
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

// function operateIt(firstnumber, secondnumber, doitfunction) {

//   return value
// } 


//---reminderjunk---
// var phrase = "Hey, look at me!";
// var element = document.getElementById("container");
// element.innerHTML = phrase;


