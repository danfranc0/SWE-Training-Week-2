// var, let, const

// global scope
var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

// local scope
function myFunc() {
    var x = 10;
    const z = 5;
    {
        var x = 11;     // function scoped
        const z = 6;    // block scoped
        console.log(`global: ${x}`);
        console.log(`global: ${y}`);
        console.log(`global: ${z}`);
    }
    console.log(`global: ${x}`);
    console.log(`global: ${y}`);
    console.log(`global: ${z}`);

}

myFunc();