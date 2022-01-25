import { callApi } from './util';

const baseUrl = 'changeme';

const ping = () => {
    callApi(baseUrl + '/ping', null);
}

export default { ping }