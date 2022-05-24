const prompt = require('prompt-sync')({sigint: true});

let classSize = Number (prompt("Enter class size: "));

let groupsof3 = 0;
let groupsof2 = 0;

/* 
15 = 5 groups of 3 and 0 of 2 // remainder 0

classSize % 3 === 0;
to get amount of groups:
classSize / 3;

16 = 4 groups of 3 and 2 groups of 2 // remainder 1

classSize % 3 === 1; 16 % 3 = 1
to get amount of groups:
classSize -= 4 <---- takes into acccount 2 groups of 2 (16-4)
classSize / 3;

17 = 5 groups of 3 and 1 group of 2 // remainder 2

classSize % 3 === 2; 17 % 3 = 2
classSize -= 2 // takes into account 1 group of 2
classSize / 3;

*/

if (classSize % 3 === 0){
    groupsof3 = classSize/3;
    groupsof2 = 0;
}
if (classSize % 3 === 1){
    classSize -= 4;
    groupsof3 = classSize/3;
    groupsof2 = 2;
}
if (classSize % 3 === 2){
    classSize -= 2
    groupsof2 = 1;
    groupsof3 = classSize /3;
}

console.log("Groups of 3: " + groupsof3);
console.log("Groups of 2: " + groupsof2);