const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Kaustubh-db:Bs9axX3hjg0bR120@cluster0.su9ki.mongodb.net/FunctionUp", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
app.use((req,res,next)=>{
    var currentdate = new Date();
    console.log(currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() + " , "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes()+":" 
    + currentdate.getSeconds() + " , " + req.ip + " , "+req.originalUrl)   
    next()
})
app.use('/', route);



app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
