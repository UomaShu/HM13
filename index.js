//var fs = require('fs');
 
//fs.writeFile("test.txt", "asdasdasd", function(err,data){});
//var a="SOME TEXT"
//fs.appendFile('test.txt', '\r\n'+a, (err) => {});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rozariokun@gmail.com',
    pass: 'Вы таким образом хотели узнать наши пароли ???Я вас раскрыл!'
  },
});
var mailOptions = {
  from: 'rozariokun@gmail.com',
  to: 'rozariokun@gmail.com',
  subject: 'ez',
  text: "ez"
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});