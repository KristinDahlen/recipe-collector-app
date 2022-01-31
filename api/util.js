const logRequest = (res) => {
    console.log(`Called "${res.url}" and received response "${res.status}"`);
    return res;
}

const logError = (e) => {
    console.log('Error when calling the recipe collector api:\n', e.stack);
}

const handleResponse = async (res) => {
    if (res.status == 204) {
        return res;
    }
    if (res.status > 400) {
        const errorResponse = await res.json();
        console.log(`Server responded with non ok statuscode: ${errorResponse.statusCode} - ${errorResponse.error} - ${errorResponse.message}`);
        return errorResponse;
    }
    return await res.json();
}

export const callApi = (url, req = null) => {
    return fetch(url, req)
        .then(logRequest)
        .then(handleResponse)
        .catch(logError);
}
