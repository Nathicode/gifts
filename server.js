const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Winner = require('./models/list.js')
const url = 'mongodb+srv://nathi:qwer123@cluster0.16xnlht.mongodb.net/?retryWrites=true&w=majority'
app.set('view engine', 'ejs');
mongoose.connect(url)
.then(() => {
    app.listen(port, () => {
        console.log('i am listening bro');
    })
})
.catch((err) => {
    console.log(err);
})
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/answer', (req, res) => {
    res.render('form' ,{ messages: 'Submit your info' })
})
app.post('/post', (req, res) => {
   const Chicken = new Winner(req.body);
   Chicken.save()
   .then((result) => {
res.render('form', { messages: 'Successfully Submited Wait For Our Response' })
   })
   .catch((err) => {
    console.log(err);
    res.render('form', { messages: 'Not Successfully SubmitTry Again' })
   })
})
app.get('/panel', (req, res) => {
Winner.find()
.then((result) => {
res.render('panel', { winners: result })
})
.catch((err) => {
    console.log(err);
})
})
app.get('/about', (req, res) => {
    res.send('index.html')
})

