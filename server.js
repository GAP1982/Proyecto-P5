const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = 3000
const dotenv = require('dotenv')
dotenv.config()
const uri = process.env.URI
const path = require('path');
const cookieParser = require('cookie-parser')
const { readSync } = require('fs')

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

app.use(express.json());
app.use(cookieParser());
app.use("health", (req, res) => res.sendStatus(200));
app.use('/', () => routes);

mongoose.connect(uri).
then(() => {
  app.listen(port, () => {
    console.log(`Alive and listening on port http://localhost:${port}`)
  })

})

.catch(error => console.log(error));





