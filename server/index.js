const express = require('express');

const path = require('path');

const app = express();
const port = 3000;
const APIControllers = require('./APIControllers.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/products/:product_id', express.static(path.join(__dirname, '../client/dist')));

app.get('/jquery.js', (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
));

app.get('/products/:product_id/jquery.js', (req, res) => (
  res.sendFile(path.resolve(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
));

app.get('/api/overview/:product_id', (req, res) => {
  APIControllers.overviewHandler(req.params.product_id, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.get('/api/reviews/:product_id', (req, res) => {
  APIControllers.reviewHandler(req.params.product_id, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.get('/api/qa/:product_id', (req, res) => {
  APIControllers.qaHandler(req.params.product_id, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.get('/api/related/:product_id', (req, res) => {
  APIControllers.relatedHandler(req.params.product_id, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.post('/outfit', (req, res) => {
  let outfit = req.body.outfitIDs.split(',');
  APIControllers.outfitHandler(outfit, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.post('/api/cart', (req, res) => {
  APIControllers.cartPostHandler(req, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.get('/cart', (req, res) => {
  APIControllers.cartGetHandler(req, (err) => {
    res.status(404);
    res.end();
  }, (productData) => res.send(productData));
});

app.put('/qa/questions/:question_id/helpful', APIControllers.questionHelpful);

app.put('/qa/answers/:answer_id/helpful', APIControllers.answerHelpful);

app.put('/reviews/:review_id/helpful', APIControllers.reviewHelpful);

app.put('/qa/questions/:question_id/report', APIControllers.questionReport);

app.put('/qa/answers/:answer_id/report', APIControllers.answerReport);

app.put('/reviews/:review_id/report', APIControllers.reviewReport);

app.post('/qa/questions', APIControllers.questionAdd);

app.post('/qa/questions/:question_id/answers', APIControllers.answerAdd);

app.post('/reviews', APIControllers.reviewAdd);

app.post('/interactions', (req, res) => {
  APIControllers.interactionHandler(req.body, () => {
    res.status(404);
    res.end();
  }, () => res.end());
});

app.post('/cart', APIControllers.cartAdd);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
