//Additional aspects
let clear  = document.getElementById("clear");
let equal = document.getElementById("equal");
let decimal = document.getElementById("decimal");
let display = document.getElementById("display");

//Operators
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let subtract = document.getElementById("subtract");
let add = document.getElementById("add");

//Numbers
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");


//Main Working bits 
clear.addEventListener('click', function(){display.innerHTML = ""});
equal.addEventListener('click',  function(){display.innerHTML = eval(display.innerHTML)})
decimal.addEventListener('click', function(){display.innerHTML += "."});

divide.addEventListener('click', function(){display.innerHTML += "/"});
multiply.addEventListener('click', function(){display.innerHTML += "*"});
subtract.addEventListener('click', function(){display.innerHTML += "-"});
add.addEventListener('click', function(){display.innerHTML += "+"});

zero.addEventListener('click', function(){display.innerHTML += "0"});
one.addEventListener('click', function(){display.innerHTML += "1"});
two.addEventListener('click', function(){display.innerHTML += "2"});
three.addEventListener('click', function(){display.innerHTML += "3"});
four.addEventListener('click', function(){display.innerHTML += "4"});
five.addEventListener('click', function(){display.innerHTML += "5"});
six.addEventListener('click', function(){display.innerHTML += "6"});
seven.addEventListener('click', function(){display.innerHTML += "7"});
eight.addEventListener('click', function(){display.innerHTML += "8"});
nine.addEventListener('click', function(){display.innerHTML += "9"});