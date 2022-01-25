import { callApi } from './util';

const baseUrl = 'changeme';
const userRoutes = '/users';

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

    const res = await callApi(baseUrl + userRoutes + '/login', req);
    const { token } = await res.json();
    return token;
}

export default { ping, login }