
const axios = require('axios');

const headers = {
    'Content-Type': 'application/json',
    'charset': 'UTF-8'
};
class API {

    async get(reqUrl) {
        return await axios.get(reqUrl, { validateStatus: false, headers });
    }

    async post(reqUrl, body) {
        return await axios.post(reqUrl, body, { validateStatus: false, headers });
    }

    async put(reqUrl, body) {
        return await axios.put(reqUrl, body, { validateStatus: false, headers });
    }

    async delete(reqUrl, body) {
        return await axios.delete(reqUrl, { validateStatus: false, headers });
    }
}

module.exports = API;
