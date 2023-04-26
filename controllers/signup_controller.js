const  hash = require('js-sha512');
const mongoose = require('mongoose');

// Local Modules
const User = require('../models/user_schema');

const signup = async(req,res)=>{
    console.log("called api")
    const data={
      _id:req.body.Email,
      password:hash(req.body.Password),
      name:req.body.Name,
    };
    let checkUser=await User.exists({_id:req.body.Email});
    let response=null;
    if(checkUser===null){
      response = await User.create(data);
      res.send({status:'success',message:'user added!'});
    }else{
      res.send({status:'error',message:'user already exist!'});
    }
  }

  

//   Export of all methods as object
  module.exports =  {signup}