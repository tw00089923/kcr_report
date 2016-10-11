import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;

 // User.findOne( {$or:[{email:identifier},{ username:identifier}]} , (err ,data) => {
 //   if(err){

 //    res.status(401).josn({errors:{form:'err'}});
 //   }else{
 //     console.log(data);
 //     if(bcrypt.compareSync(password,data.password_digest)){
 //        const token = jwt.sign({id:data._id,username :data.username });
 //        res.json(token);
 //     }else{
 //      res.status(401).json({errors: {form:'Email'} });
 //     }
 //   }
 
 // } );


 User.findOne( {$or:[{email:identifier},{ username:identifier}]} ).then(user =>{
    console.log(user);
    if (user) {
      if (bcrypt.compareSync(password, user.password_digest)) {
        const token = jwt.sign({
          id : user._id,
          username: user.username
        }, config.jwtSecret);
        res.json({ token });



      } else {
        res.status(401).json({ errors: { form: 'Email' } });
      }
    } else {
      res.status(401).json({ errors: { form: '密碼錯誤' } });
    }
 });



  


  //   });

  // User.findOne({
  //   username:identifier 
  // }).then(user => {

  //   console.log(user);
  //   if (user) {
  //     if (bcrypt.compareSync(password, user.password_digest)) {
  //       const token = jwt.sign({
  //         id : user._id,
  //         username: user.username
  //       }, config.jwtSecret);
  //       res.json({ token });



  //     } else {
  //       res.status(401).json({ errors: { form: 'Email' } });
  //     }
  //   } else {
  //     res.status(401).json({ errors: { form: '密碼錯誤' } });
  //   }
  // });



});

export default router;
