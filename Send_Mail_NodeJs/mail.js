var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var helmet = require('helmet');
var nodemailer = require('nodemailer');
let alert = require('alert');

app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());

app.listen(4000,()=> {
    console.log("Application Started And Listening On Port 4000....");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/mail.html')
});

app.post('/sendmail', async(req, res) => {
    console.log(req.body);
    var mail = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'hugsandkisses0926@gmail.com',
            pass:'siypazzlucnyaozg'
        }
    });
    var data = {
        from:'hugsandkisses0926@gmail.com',
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.message
    }
    
    mail.sendMail(data,function(error,info){
        if(error){
            console.log(error);
        } else{
            console.log('Email Sent: ' + info.response);
        }
    })
    alert("Mail Sent Successfully !!");
    return res.send('Mail Sent Successfully !! to  '+ req.body.to);
  });