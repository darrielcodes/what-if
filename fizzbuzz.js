const prompt = require('prompt-sync')({sigint: true});

let input = Number(prompt("Enter a number: "));

if (input % 3 === 0) {
    console.log("Fizz")
};
if (input % 5 === 0){
    console.log("Buzz")
};
if (input % 15 === 0) {
    console.log("FizzBuzz")
};