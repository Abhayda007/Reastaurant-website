const express = require("express");
const Mongoose = require("mongoose")
var bodyParser = require("body-parser"); 
const Review = require("./models/review.js");

//mongodb+srv://web-tech:<password>@reviews-data.ck1ht.mongodb.net/<dbname>?retryWrites=true&w=majority

const app = express();

Mongoose.connect("mongodb+srv://web-tech:reviews@reviews-data.ck1ht.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser : true, useUnifiedTopology: true})
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

///app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true
}));

app.get('/', (req, res) => {
    res.sendFile('./public/HTML/home.html', {root : __dirname});
});

app.get('/order-now', (req, res) => {

    res.sendFile('./public/JS/App.js', {root : __dirname});

});


app.get('/reviews', (req, res) => {
    
    //res.render('reviews.ejs');
    //res.sendFile('./public/HTML/reviews.html', {root : __dirname});

    Review.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('reviews.ejs', { revs: result });
    })
    .catch(err => {
      console.log(err);
    });

});

app.get('/all-revs', (req, res) => {
    Review.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err)=> {
        console.log(err);
    })
  });
  

app.post('/reviews', (req, res) => {
    
    console.log(req.body);
    
    const rev = new Review(req.body)

    console.log(rev);

    rev.save()
    .then(result => {
      res.redirect('/reviews');
    })
    .catch(err => {
      console.log(err);
    });
    
});

app.use((req, res) => {
    res.send("404 page not found!!");
});


