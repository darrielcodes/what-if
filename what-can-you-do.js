const prompt = require('prompt-sync')({sigint: true});

let input = Number(prompt("Enter your age: "));
console.log(input);


if (input < 16){
    console.log("You can't drive.")
} 

else if(input <= 17){
    console.log("You can drive but not vote.")
} 

else if(input <= 24){
    console.log("You can vote but not rent a car.")
}
else if (input >= 25) {
    console.log("You can do pretty much anything.")
}
