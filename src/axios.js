const axios = require('axios').default;

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breeds/image/random',
  });

export default instance;