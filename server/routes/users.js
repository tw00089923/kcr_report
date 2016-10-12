import express from 'express';
import commonValidations from '../shared/validations/signup';
import bcrypt from 'bcrypt';
import isEmpty from 'lodash/isEmpty';

import User from '../models/user';

let router = express.Router();

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  return User.findOne({email : data.email})
     .then(user => {
    if (user) {
      if ( user.username === data.username) {
        errors.username = 'There is user with such username';
      }
      if (user.email === data.email) {
        errors.email = 'There is user with such email';
      }
    }

    return {
      errors,
      isValid: isEmpty(errors)
    };
  })

}

router.get('/:identifier', (req, res) => {
  User.findOne({
    email: req.params.identifier
    
  }).then(user => {
    res.json({ user });
 
    
  });
});


router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, password, department, email } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);

      const user = new User({ username,password_digest,timezone,email });
      user.save( ( err , data) => { 
        if(err){
            res.status(500).json({message:"insert DB errors"});
        }else{
        //  res.status(500).json({message:"insert DB errors"});
      
        res.json({ success: true });
          console.log("ok");
        }


      } );
        
    


    } else {
      res.status(400).json(errors);
    }
  });

});

export default router;
