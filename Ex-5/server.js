var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var helmet = require('helmet');

app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());

app.listen(4000,()=> {
    console.log("Application Started And Listening On Port 4000.....");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/home.html')
});

app.post('/reg', async(req, res) => {
    var count = req.body.box.split('').length;
    var words = req.body.box.split(' ').length;
    console.log(count);
    console.log(words);
    return res.send('Length of the Sentence : ' + count + '\n\n' + 'No. of Words in Sentence : ' +words);
  })