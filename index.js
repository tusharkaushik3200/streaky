const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');
var mysql = require('mysql');
let path = require('path')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


const userDatabase = [];

// Create users endpoint
app.get('/signup', (req, res) => {
  const {phone } = {
    phone: "+917737700162"
  }//req.body;
  const user = {
   
    phone
  };

  // userDatabase.push(user);

  const welcomeMessage = 'Welcome to streaky! Your verification code is 54875';

  sendSms(user.phone, welcomeMessage);

  res.status(201).send({
    message: 'Account created successfully, kindly check your phone to activate your account!',
    data: phone
  })
});






app.listen(4000, () => console.log('Example app listening on port 4000!'));

module.exports = app;

