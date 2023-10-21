// numbers

const myNumber = 42;
const myFloat = 42.01;
const myString = "42";
const myString2 = "42.123abc";

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber == myString);

console.log(Number(myString) === myNumber);
console.log(Number("Dave"));
console.log(Number(true));
console.log(Number.isInteger(myString));

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString2));
console.log(Number.parseFloat(myString2).toFixed(2));
console.log(Number.parseInt(myString2));

console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString2));

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

console.log(isNaN("Dave"));