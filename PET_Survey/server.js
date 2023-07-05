var express = require('express');
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var helmet = require('helmet');

app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());

mongoose.connect('mongodb://127.0.0.1:27017/PET_SURVEY_FORM');

const event = mongoose.model('PET_SURVEY_DETAILS',new mongoose.Schema({
    Name : String,
    Age: Number,
    Do_You_Own_a_Pet: String,
    How_Many_Pets_Do_You_Have : Number,
    What_Type_Of_Pet_Do_You_Currently_Have : Array,
    For_How_Many_Years_Have_You_Been_a_Pet_Owner : String,
    Where_Does_Your_Pet_Sleep : Array,
    At_What_Age_Did_You_First_Become_a_Pet_Owner : String,
    Do_You_Travel_With_Your_Pet : String,
    How_Much_Do_You_Spend_On_The_Grooming_Of_Your_Pet_Per_Year : String,
    How_Often_Do_You_Take_Your_Pet_To_Veterinarian : String,
    What_Do_You_Prefer : String
 }))

app.listen(5000,()=> {
    console.log("Application Started And Listening On Port 5000....");
});
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/button.html')
});
app.get("/b1",(req,res)=>{
    res.sendFile(__dirname+'/pet.html')
});
app.get("/b2",async(req,res)=>{
    const num = await event.find().countDocuments()
    console.log(num)
    const dog = await event.find({What_Type_Of_Pet_Do_You_Currently_Have:"Dog"}).countDocuments()
    const cat = await event.find({What_Type_Of_Pet_Do_You_Currently_Have:"Cat"}).countDocuments()
    const bird = await event.find({What_Type_Of_Pet_Do_You_Currently_Have:"Birds"}).countDocuments()
    const fish = await event.find({What_Type_Of_Pet_Do_You_Currently_Have:"Fish"}).countDocuments()
     const htmlString = `
     <body style="background-color: skyblue;">
     <h1 style="color: purple;margin-left: 600px;">SURVEY REPORT</h1>
    <div style="background-color: #6495ED;
    padding: 10px 5px;
    margin: 30px;
    margin-left: 550px;
    text-align: center;
    border: none;
    cursor: pointer;
    width: 25%;
    border-radius: 8px;
    display: block;
    position: middle;">
      <p>Number Of Documents Submitted is : ${num}</p>
      <p>Number Of User Having Dog : ${dog}</p>
      <p>Number Of User Having Cat : ${cat}</p>
      <p>Number Of User Having Birds : ${bird}</p>
      <p>Number Of User Having Fish : ${fish}</p>
    </div>
    </body>
  `;
  return res.send(htmlString);
    //return res.send("<div style = 'background-color:skyblue'>"+"Number Of Documents Submitted is : "+ num +"<br><br>"+"Number Of User Having Dog :"+dog+"<br><br>"+"Number Of User Having Cat :"+cat+"<br><br>"+"Number Of User Having Birds :"+bird+"<br><br>"+"Number Of User Having Fish :"+fish+"</div>")
});

app.post('/reg', async(req, res) => {
    console.log(req.body);
    event.insertMany({
        Name : req.body.name,
        Age: req.body.age,
        Do_You_Own_a_Pet: req.body.own,
        How_Many_Pets_Do_You_Have: req.body.nopets,
        What_Type_Of_Pet_Do_You_Currently_Have: req.body.Pet,
        For_How_Many_Years_Have_You_Been_a_Pet_Owner  : req.body.owner,
        Where_Does_Your_Pet_Sleep : req.body.sleep,
        At_What_Age_Did_You_First_Become_a_Pet_Owner: req.body.ownerage,
        Do_You_Travel_With_Your_Pet : req.body.travel,
        How_Much_Do_You_Spend_On_The_Grooming_Of_Your_Pet_Per_Year : req.body.Groom,
        How_Often_Do_You_Take_Your_Pet_To_Veterinarian  : req.body.Veterinarian,
        What_Do_You_Prefer : req.body.Prefer
    })
    const num = await event.find().countDocuments()
    console.log(num)
    return res.send('User ' + req.body.name + '  Surveyed Successfully!');
})