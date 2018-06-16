var express = require('express')
const jwt = require('jsonwebtoken')

var router = express.Router()
const User = require('../models/user')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
});

router.post('/signup', function(req, res) {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registerUser) => {
    if(err) { 
      console.log(err)
    }else {
      let payload = { subject : registerUser._id }
      let token = jwt.sign(payload , 'secretkey')
      res.status(200).send({token})
    }
  })
  
})
router.post('/login', function(req, res) {
  let userData = req.body
  User.findOne({ username : userData.username } , (error , user) => {
    if (error) {
      console.log(error)
    }else {
      if(!user) {
        res.status(404).send('Invalid Email')
      }else {
        if (user.password !== userData.password) {
          res.status(404).send('Invalid Password')
        } else {
          let payload = { subject : user._id }
          let token = jwt.sign(payload , 'secretkey')
          res.status(200).send({token})
        }
      }
    }

  })
  
});

module.exports = router
