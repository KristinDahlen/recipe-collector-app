import { callApi } from './util';

const baseUrl = 'changeme';
const userRoutes = '/users';
const recipeRoutes = '/recipes';

const ping = () => {
    callApi(baseUrl + '/ping');
}

const login = async ({ email, password }) => {
    const req = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    const data = await callApi(baseUrl + userRoutes + '/login', req)
    if (data.error) {
        return null;
    }
    return data.token;
}

const getRecipes = async (token) => {
    const req = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    }

    const data = await callApi(baseUrl + recipeRoutes + '/', req);
    if (data.error) {
        return null;
    }
    return data.recipes;
}

export default { ping, login, getRecipes }