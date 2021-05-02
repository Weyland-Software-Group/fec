const axios = require('axios');
const API_KEY = require('../config.js');
const baseURL = require('./AtelierConfig.js');

const questionAdd = (req, res) => {
  const questionData = req.body;
  questionData.product_id = parseInt(questionData.product_id);
  axios({
    method: 'post',
    data: questionData,
    url: `${baseURL}/qa/questions`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end())
    .catch((data) => res.send(data));
};

const answerAdd = (req, res) => {
  const questionID = req.params.question_id;
  axios({
    method: 'post',
    data: req.body,
    url: `${baseURL}/qa/questions/${questionID}/answers`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

const reviewAdd = (req, res) => {
  axios({
    method: 'post',
    data: req.body,
    url: `${baseURL}/reviews`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

const cartAdd = (req, res) => {
  axios({
    method: 'post',
    data: req.body,
    url: `${baseURL}/cart`,
    headers: { Authorization: API_KEY },
  })
    .then(() => res.end());
};

module.exports.questionAdd = questionAdd;
module.exports.answerAdd = answerAdd;
module.exports.reviewAdd = reviewAdd;
module.exports.cartAdd = cartAdd;
