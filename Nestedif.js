var prompt = require('prompt-sync')();
var number = prompt("Enter any Number:");
if(number == 42){
    if(number<40)
    console.log("Less");
    else
    console.log("Big");
}else{
    if(number == 52)
    console.log("Value is Equal");
    else
    console.log("Value is NotEqual");
}