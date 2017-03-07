var express=require('express');
var app=express();

app.use(express.static(__dirname + '/'));

//Routes
app.get('/', function (req, res) {
    res.redirect('/views/index.html');
});

//Launching server
app.listen(8080, function (req,res) {
  console.log("Opening port 8080");    
  console.log('application launched at localhost:8080');
});
