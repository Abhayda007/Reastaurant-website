const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
    firstname: {type: String , required : true },
    email: {type: String , required : true },
    address: {type: String , required : true },
    city: {type: String , required : true },
    state: {type: String , required : true },
    zip: {type: String , required : true },
    cardname: {type: String , required : true },
    cardnumber: {type: String , required : true },
    expmonth: {type: String , required : true },
    expyear: {type: String , required : true },
    cvv: {type: String , required : true },
    sameadr: {type: String , required : true }
}, {timestamps : true});

const checkout= mongoose.model('checkout', checkoutSchema);
module.exports = checkout;




