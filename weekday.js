const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a number 1-7: "));

if (num === 1){
    console.log("Monday")
};
if (num === 2){
    console.log("Tuesday")
};
if (num === 3){
    console.log("Wednesday")
};
if (num === 4){
    console.log("Thursday")
};
if (num === 5){
    console.log("Friday")
};
if (num === 6){
    console.log("Saturday")
};
if (num === 7){
    console.log("Sunday")
};
if (num >= 8 ){
    console.log("error")
};