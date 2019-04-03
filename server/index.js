require('dotenv').config()

const express = require('express'),
      massive = require('massive')


const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then( db => {
  app.set('db', db);
  app.listen( SERVER_PORT, () => {console.log(`bingpot on ${SERVER_PORT}`)})
})

// Endpoints
const Ctrl = require('./Controller')
app.get(`/noun/getrandom`, Ctrl.getNouns)
app.get(`/adjective/getrandom`, Ctrl.getAdjectives)
app.get(`/item/getrandom`, Ctrl.getItems)
