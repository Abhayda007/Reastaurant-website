const express = require("express");
const Mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Checkout = require('./models/checout-data.js')

const app = express();


Mongoose.connect("mongodb+srv://web-tech:reviews@reviews-data.ck1ht.mongodb.net/checkout-data?retryWrites=true&w=majority", {useNewUrlParser : true, useUnifiedTopology: true})
    .then(result => app.listen(4000))
    .catch(err => console.log(err));

const db = Mongoose.connection;

app.use(express.static('HTML and CSS'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.get('/', (req,res)=>{
    res.sendFile('./HTML and CSS/Checkout form.html', {root:__dirname});
});


app.post('/checkout', (req, res) => {
    
    console.log(req.body);
    
    const data = new Checkout(req.body);

    console.log(data);

    data.save()
    .then(result => {
      res.redirect("http://localhost:3000");
    })
    .catch(err => {
      console.log(err);
    });

});


app.use((req, res) => {
    res.send("404 page not found!!");
});
