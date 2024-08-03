const mongoose = require('mongoose')

const orderschema = new mongoose.Schema({
   cardItem : Array,
   price : Number,
   amount: String,
   status: String,
    createAt: Date,
})

const orderModel = mongoose.model('order' , orderschema)

module.exports = orderModel