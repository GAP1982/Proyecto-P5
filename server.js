const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const port = 3000
const dotenv = require('dotenv')
dotenv.config()
const url = 'mongodb+srv://GastonPerez:rIWtiULQ2RPe3K9n@cluster0.apufvus.mongodb.net/'
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

const connectToMongo = async()=> {
  try{
    await mongoose.connect(url)
    app.listen(3000,()=>{
      console.log('Server on port 3000 and DB connected!')
    })
  }
 
  catch(error){
    console.log(error)
  }
}
connectToMongo()





