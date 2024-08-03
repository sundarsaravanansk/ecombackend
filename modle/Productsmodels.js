const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
    name: String,
    price:String,
    description: String,
    ratings: String,

})

const productModel = mongoose.model('product' , productschema)

module.exports = productModel