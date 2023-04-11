
// require the library
const mongoose = require('mongoose')

// connect to the databae
mongoose.connect('mongodb://127.0.0.1:27017/user_data');

// acquire connection (to check if its successfull)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console,'error connecting to db'));

//up and running 
db.once('open',function () {
    console.log('successfully connected to db')
});