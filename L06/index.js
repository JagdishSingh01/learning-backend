const express = require('express');
const app = express();
const path= require('path');

//parsers
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  res.render("index");
})
app.get("/profile/:username", function(req, res){
  
  res.send(`welcome ${req.params.username}`);
})

app.get("/profile/:username/:age", function(req, res){
  res.send(req.params);
})

app.listen(3000,function(){
  console.log("running");
})