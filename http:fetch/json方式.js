import fetch from 'dva/fetch';

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/*

关键是
1. JSON.stringify
2. headers的content-type

*/

export default function request(url, options) {
    const optionsCloned = Object.assign({}, options)
    if (options.method === "POST") {
        optionsCloned.body = JSON.stringify(options.body)
        optionsCloned.headers = { "Content-Type": "application/json" }
    }
    optionsCloned.credentials = 'include'
    return fetch(url, optionsCloned)
        .then(checkStatus)
        .then(parseJSON)
        .catch(err => ({ err }))
}


