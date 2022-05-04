//if statement
var prompt = require('prompt-sync')();
var enterString = prompt("Enter Any String: ");
if(enterString>=80)
console.log("Congrats! You pass the Exam");
else if(enterString>=60)
console.log("Good! you are Eligible for Commerce");
else if(enterString>=50)
console.log("All the Best");
else if(enterString < 35)
console.log("Failed");
else
console.log("Sorry! \try Next Time");