const logRequest = (res) => {
    console.log(`Called "${res.url}" and received response "${res.status}"`);
    return res;
}

const logError = (e) => {
    console.log('Error when calling the recipe collector api:\n', e.stack);
}

const logNonOkResponse = async (res) => {
    if (res.status < 400) {
        return
    }
    const { error, message, statusCode } = await res.json();
    console.log(`Server responded with: ${statusCode} - ${error} - ${message}`);
    return res;
}

export const callApi = (url, req, callback = () => { }, errorCallback = () => { }) => {
    fetch(url)
        .then(logRequest)
        .then(logNonOkResponse)
        .then(callback)
        .catch((e) => {
            logError(e);
            errorCallback(e);
        });
}
