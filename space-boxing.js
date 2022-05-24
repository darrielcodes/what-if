const prompt = require('prompt-sync')({sigint: true});

let weight = Number(prompt("What is your Earth weight? "));

let planet = Number(prompt("What planet are you on? (Enter 1- Venus, 2- Mars, 3- Jupiter, 4- Saturn, 5- Uranus, 6- Neptune)"))

if (planet === 1){
    console.log("Your Venus weight will be: " + (weight * 0.78))
}
else if (planet === 2){
    console.log("Your Mars weight will be: " + (weight * 0.39))
}
else if (planet === 3){
    console.log("Your Jupiter weight will be: " + (weight * 2.65))
}
else if (planet === 4){
    console.log("Your Saturn weight will be: " + (weight * 1.17))
}
else if (planet === 5){
    console.log("Your Uranus weight will be: " + (weight * 1.05))
}
else if (planet === 6){
    console.log("Your Neptune weight will be: " + (weight * 1.23))
}
else {
    console.log(" error ")
}