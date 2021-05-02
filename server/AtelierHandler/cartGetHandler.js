const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const cartGetHandler = (req, errorCB, successCB) => {
  const productData = {};
  axios({
    method: 'get',
    url: `${baseURL}/cart`,
    headers: { Authorization: API_KEY },
  })
    .then((response) => {
      productData.cart = response.data;
      successCB(productData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = cartGetHandler;
