const mongoose = require('mongoose');

//--------------configuration for the mongoose model for the database------------------
mongoose.connect('mongodb+srv://warfreak:backspace90-=@cluster0.vsfo0.mongodb.net/pdf-db?retryWrites=true&w=majority');

//schema for the user
const usersSchema = {
  _id:String,
  password: String,
  name:String,
};
const User = mongoose.model('User', usersSchema);

module.exports =  User;