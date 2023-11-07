// classes

/*
class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
    }

    get pizzaCrust() {
        return this.crust;
    }
    
    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    bake() {
        console.log(
            `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
        );
    }
}
const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.bake();
console.log(myPizza.getCrust());
*/
/*
class Pizza {
    constructor(pizzaSize) {
        this._size = pizzaSize;
        this._crust = "original";
    }
    getCrust() {
        return this._crust;
    }
    setCrust(pizzaCrust) {
        this._crust = pizzaCrust;
    }
}
class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "The Works";
    }
    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`);
    }
}
const mySpecialty = new SpecialtyPizza("medium");
mySpecialty.slice();
*/

class Pizza {
    crust = "original";
    #sauce = "traditional";     // private field
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust;
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
}
const myPizza = new Pizza("large");
myPizza.hereYouGo();

console.log(myPizza.getCrust());