const axios = require('axios');
const API_KEY = require('../config.js');
const qaUrl = require('./QAConfig.js');

// const testHandler = (productID, errorCB, successCB) => {
//   const productData = {};
//   axios({
//     method: 'get',
//     url: `${qaUrl}/qa/questions?product_id=${productID}&count=100&page=1`,
//     headers: { Authorization: API_KEY },
//   })
//     .then((response) => {
//       console.log('here');
//       productData.qa = response.data;
//       successCB(productData);
//     })
//     .catch((response) => {
//       errorCB(response);
//     });
// };

const reviewHandler = (productID, errorCB, successCB) => {
  const productData = {};
  axios({
    method: 'get',
    url: `${qaUrl}/qa/questions?product_id=${productID}&count=100&page=1`,
    headers: { Authorization: API_KEY },
  })
    .then((response) => {
      productData.qa = response.data;
      successCB(productData);
    })
    .catch((response) => {
      errorCB(response);
    });
};

module.exports = reviewHandler;
// module.exports = testHandler;
