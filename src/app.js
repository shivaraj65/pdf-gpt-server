const express = require('express');
const bodyParser = require('body-parser');
const  cors = require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Local Modules
const myRoute = require('./routes/myRoutes');

// Routes will be written here
app.use('/', myRoute); 

// ------------------------configuration of cors----------------------
var corsOptions = {
  origin: '*',
  credentials:true,
  optionsSuccessStatus: 200
};
app.options('/signup', cors());

//app listening port number
app.listen(process.env.PORT || 3001, function(){
  console.log('Server started on port 3001');
 });
