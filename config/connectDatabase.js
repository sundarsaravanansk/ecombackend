const mongoose = require('mongoose')


const connectDatabase = () => {
    mongoose.connect('mongodb+srv://sundarsk:sundarsk@cluster0.1yuizxz.mongodb.net/ecom')
    .then((con) => console.log('Database Connected!'));
}


module.exports = connectDatabase;