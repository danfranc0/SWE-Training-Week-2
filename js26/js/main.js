// fetch API
// callbacks, promises, thenable, async/await

// promise states: Pending, Fulfilled, Rejected

// abstract into functions

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstname=${requestData.firstName}&
    lastName=${requestData.lastName}&limitTo=${requestData.catergories}`
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postToWebPage(joke);
}

const postToWebPage = (data) => {
    console.log(data);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl); 
    console.log("finished");
}

processJokeRequest();