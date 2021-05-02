const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const cartPostHandler = (req, errorCB, successCB) => {
  const cartData = {};
  const { cartIDs } = req.body;
  const cartID = cartIDs.split(',');
  let infoLength = 0;
  let styleLength = 0;
  cartData.cart = {};
  const cartInformationRequests = cartID.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}`,
    headers: { Authorization: API_KEY },
  }));
  const cartStyleRequests = cartID.map((id) => axios({
    method: 'get',
    url: `${baseURL}/products/${id}/styles`,
    headers: { Authorization: API_KEY },
  }));
  infoLength = cartInformationRequests.length;
  styleLength = cartStyleRequests.length;
  axios.all(cartInformationRequests.concat(cartStyleRequests))
    .then((response) => {
      cartData.cart.cartInformation = [];
      cartData.cart.cartStyles = [];
      for (let i = 0; i < infoLength; i += 1) {
        cartData.cart.cartInformation.push(response[i].data);
      }
      for (let i = infoLength; i < infoLength + styleLength; i += 1) {
        cartData.cart.cartStyles.push(response[i].data);
      }
      successCB(cartData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = cartPostHandler;
