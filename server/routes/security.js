const express = require('express');
const createToken  = require('../lib/auth').createToken;
const router = express.Router();
const User = require('../models/user');

router.post('/login_check', (req, res) => {
  console.log(User.login(req.body.email,req.body.password));
  User.login(req.body.email,req.body.password).then(() =>
  {
      const token = createToken({
        firstName:'user',
        lastName:'user',
      });
      res.status(201).send({token});
  })
    .catch(error => res.status(400).json({error : 'Invalids Credentials'}));

});

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.register().then(data => res.status(201).json(data))
    .catch(error =>{
    if(error.name === "ValidationError"){
      res.status(400).json(error.errors);
    } else {
      res.sendStatus(500);
    }
  } );
});

module.exports = router;