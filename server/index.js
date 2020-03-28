require('dotenv').config()

const express = require('express'),
      massive = require('massive')


const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then( db => {
  app.set('db', db);
  app.listen( SERVER_PORT, () => {console.log(`bingpot on ${SERVER_PORT}`)})
}).catch( error => console.log(error))

// Endpoints
const ctrl = require('./Controller')
app.get(`/api/getWords`, ctrl.getWords)
