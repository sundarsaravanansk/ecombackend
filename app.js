const express = require('express');
const app = express();
const dontenv = require('dotenv');
const path = require('path')
const connectDatabase = require('./config/connectDatabase')
const products = require('./routes/Products')
const orders = require('./routes/orders')
dontenv.config({path: path.join(__dirname, 'config', 'config.env')})

connectDatabase();

app.get("/" , (req , res )=>{
    res.json({message : "hello backend"})
})

app.use(express.json())
app.use('/' , products)
app.use('/', orders)


app.listen(process.env.PORT, ()=>{
    console.log(`server run ${process.env.PORT} in ${process.env.NODE_ENV}`)
})