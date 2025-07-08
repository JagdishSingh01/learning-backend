const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// creating cookie 
// app.get('/', (req, res)=>{
//   res.cookie("name", "harshita");
//   res.send("done");
// });

// reading cookie
// app.get('/read', (req, res)=>{
//   console.log(req.cookies);
//   res.send("read page");
// });


//encryption
// app.get('/', (req,res)=>{
//   bcrypt.genSalt(10,function(err, salt){
//     bcrypt.hash('jagdishsingh', salt, function(err, hash){
//       console.log(hash)
//     })
//   })
// })

// app.get('/', function(req, res){
//   res.send('working');
// })

//compare with bcrypt
// app.get('/', function(req, res){
//   bcrypt.compare('jagdishsingh', '$2b$10$KE1cyY1g4xDN3uvneFOis.5sP7ADQ.1Ry650D0yRkuvvKbMo2ylIy', function(err, result) {
//     console.log(result);
//   });
// })


//decyption
app.get('/',function(req, res){
  let token = jwt.sign({email: "jatinpawar420@example.com"}, "secret")
  res.cookie("token", token);
  res.send("done");
})

app.get('/read', function(req, res){
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
})

//localhost
app.listen(3000);
