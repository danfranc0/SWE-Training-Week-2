// functions

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 6));

const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("user@GitHub.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name. slice(1).toLowerCase();
};

console.log(toProperCase("dAniEl"));