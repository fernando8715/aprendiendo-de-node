const axios = require('axios');

const httpClientPlugin = {

    get: async (url) => {
        const {data } = await axios.get(url);    
        return data;    
    },

    post: async (url, data) => { },
    put: async (url, data) => { },
    remove: async (url) => { },
}

module.exports = {
    http: httpClientPlugin,
}
