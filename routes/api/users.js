const express = require('express');
const router = express.Router();

//lOad user model

const User = require ('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   GET api/users/register
// @desc    Regester user
// @access  Public

router.post('/register',(req,res) => {
    User.findOne({email :req.body.email})
    .then(User => {
        if (User){
            return res.status(400).json({msg:'Email already exist'});
        }
        else{ const newUser =new User({
            name : req.body.name ,
            email:req.body.email ,
            avatar,
            password : req.body.password
          });
        }
           
        
    })
});

module.exports = router;
