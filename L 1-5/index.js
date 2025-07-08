//L-04
// const express = require('express');
// const app = express();

// app.use(function(req,res,next){
//   console.log('middleware');
//   next();
// });

// app.get('/', (req, res,next) => {
//   return next(new Error('something went wrong'))
// });

// app.use(function(err ,req,res,next){
//   console.error(err.stack);
//   res.status(500).send('something wrong')
// });

// app.listen(3000);



//L-05 
//session cookie

// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get('/', (req, res,next) => {
//   return next(new Error('something went wrong'))
// });

// app.use(function(err ,req,res,next){
//   console.error(err.stack);
//   res.status(500).send('something wrong')
// });

// app.listen(3000);



//l-06
