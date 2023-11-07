// JavaScript Event Listeners VIEW 3

const view1 = document.querySelector("#view1");
view1.style.display = "none";
const view2 = document.querySelector("#view2");
view2.style.display = "none";
const view_3 = document.querySelector("#view3");
view_3.style.display = "flex";

// syntax: addEventListener(event, function, useCapture)

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit");
    })
};