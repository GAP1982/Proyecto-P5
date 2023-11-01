const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = 5000
const dotenv = require('dotenv')
dotenv.config()
const uri = process.env.URI
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.use('/', routes)

mongoose.connect(uri).
then(() =>{
  console.log('Alive and Listening on port http://localhost:${port}')
}
)

.catch(error => console.log(error));
//probando git

