// web storage API

const myArray = ["eat", "sleep", "code"];
const myObject = {
    name: "Daniel",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
}

//sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
//const mySessionStore = JSON.parse(sessionStorage.getItem("mySessionStore"));
//console.log(mySessionStore);

// local (persistent data)
localStorage.setItem("myLocalStore", JSON.stringify(myObject));
const storeLength = localStorage.length;
const myLocalStore = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(storeLength);

