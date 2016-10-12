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
        errors.username = '有相同用戶';
      }
      if (user.email === data.email) {
        errors.email = '有相同郵件地址';
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

      const user = new User({ username,password_digest,department,email });
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
