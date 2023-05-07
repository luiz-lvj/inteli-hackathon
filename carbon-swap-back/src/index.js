const express = require('express');
const creditModel = require('./credit_model');

const app = express();
const port = 3001;

app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', async (req, res) => {
  try {
    const credits = await creditModel.getcredits();
    res.status(200).send(credits);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/get-sell-order/:creditAddress', async (req, res) => {
  try {
    const credit = await creditModel.getcredit(req.params.creditAddress);
    res.status(200).send(credit);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/new-sell-order', async (req, res) => {
  try {
    const credit = await creditModel.createcredit(req.body);
    res.status(200).send(credit);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/credits/:id', async (req, res) => {
  try {
    const credit = await creditModel.deletecredit(req.params.id);
    res.status(200).send(credit);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/get-tokens', async (req, res) => {
  try {
    const tokens = await creditModel.gettokens();
    res.status(200).send(tokens);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/mint-tokens', (req, res, next) => {
  const data = req.body;
  if (!data) {
    const error = new Error('Data is missing');
    error.status = 400;
    return next(error);
  }
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
