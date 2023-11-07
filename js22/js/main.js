// JavaScript Event Listeners VIEW 2
const view1 = document.querySelector("#view1");
view1.style.display = "none";
const view2 = document.querySelector("#view2");
view2.style.display = "flex";

// syntax: addEventListener(event, function, useCapture)

/*
const doSomething = () => {
    alert("doing something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.textContent = "Clicked";
}, false);
*/

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = view.querySelector("h2");

    view.addEventListener("click", (event) => {
        //view.style.backgroundColor = "purple";

        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
        // same as
        //view.classList.add("purple");
        //view.classList.remove("darkblue");
    }, false);
    
    div.addEventListener("click", (event) => {
        //event.stopPropagation();

        //div.style.backgroundColor = "blue";
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);
    
    h2.addEventListener("click", (event) => {
        //event.target.textContent = "Clicked";

        const myText = event.target.textContent;
        myText === "My 2nd View"
            ? event.target.textContent = "Clicked"
            : event.target.textContent = "My 2nd View";
    }, false);

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) => {
        event.target.classList.remove("height100");
    })
};