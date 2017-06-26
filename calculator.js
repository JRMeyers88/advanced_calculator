
// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// Copy the code below an implement a basic calculator.
// When the user performs one of the operations, output the result to another DOM element of your choice.

var outputAnswer = document.getElementById("answerBox");
var first = document.getElementById("firstNum");
var second = document.getElementById("secondNum");

// var addBut = document.getElementById("add").addEventListener("click", addEm);

// var divideBut = document.getElementById("subtract").addEventListener("click", subtractEm);

// var multiplyBut = document.getElementById("multiply").addEventListener("click", multiplyEm);

// var divideBut = document.getElementById("divide").addEventListener("click", divideEm);

// ------------------------------------

//pass anon function after event listener
document.getElementById("add").addEventListener("click", function() {
  //calculate first, second, then call the function that does the work
  calculate(first.value, second.value, addEm)
});
document.getElementById("subtract").addEventListener("click", function() {
  calculate(first.value, second.value, subtractEm)
});
document.getElementById("multiply").addEventListener("click", function() {
  calculate(first.value, second.value, multiplyEm)
});
document.getElementById("divide").addEventListener("click", function() {
  calculate(first.value, second.value, divideEm)
});

//give calculate function using references to first, second, and function (ie:addEm)
function calculate(firstNum, secondNum, operate){
  //run function using first and second
  operate(firstNum, secondNum);
} 

// -------------------------------------

 /*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addEm(first, second) {
  outputAnswer.innerHTML = parseInt(first) + parseInt(second);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtractEm(first, second) {
outputAnswer.innerHTML = parseInt(first) - parseInt(second);

}

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplyEm(first, second) {
outputAnswer.innerHTML = parseInt(first)*parseInt(second);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divideEm(first, second) {
  outputAnswer.innerHTML = parseInt(first) / parseInt(second);
}


    /*
      Create a function that accepts three arguments.
        1. First number
        2. Second number
        3. A function that performs an operation on them

      Return the value of the operation.
     */

