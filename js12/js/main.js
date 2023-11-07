// loops

let myNumber = 50;
while (myNumber < 50) {
    myNumber += 2;
    console.log(myNumber)
}

do {
    console.log(myNumber);
} while (myNumber < 50);

let name = "Daniel";
for (let i = 0; i <= name.length; i++) {
    console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while (true) {
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "i") break;
    counter++;
}