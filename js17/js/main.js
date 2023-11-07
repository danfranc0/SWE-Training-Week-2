// objects

const myObj = { name: "Daniel" };

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    action: function() {
        return `Time for ${this.beverage.morning}`;
    }
};
console.log(anotherObj.action());

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// destructuring objects
//const { guitar: myVariable, bass: myBass } = band;
const { vocals, guitar, bass, drums } = band;
console.log(guitar);
console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings!`
};

console.log(sings(band));