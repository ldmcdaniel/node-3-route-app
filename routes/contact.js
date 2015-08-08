var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
require('../lib/secrets')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADDRESS,
        pass: process.env.PASSWORD
    }
});

router.get('/', function (req, res) {
  res.render('templates/contact');
    // console.log(res);
});

router.post('/submitted', function (req, res) {
  res.send('Got a POST request');
  var mailOptions = {
    from: req.body.mail,
    to: process.env.ADDRESS,
    subject: 'from: A new inquiring mind',
    text: req.body.msg
  };
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
    }else{
      console.log('Message sent: ' + info.response);
    }
  });
});

module.exports = router;
