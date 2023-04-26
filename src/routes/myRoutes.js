const { Router } = require('express');
  
// Local Modules
const controller = require('../controllers/signup_controller');

// Initialization
const router = Router();
  
// Requests 
router.post('/signup', controller.signup);

router.get('/test', async(req,res)=>{
    console.log("called test");
    res.send({status:'success',message:'user added!'});
});

module.exports = router;