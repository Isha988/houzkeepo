const { check, validationResult } = require("express-validator");

const loginValidation = [  
    check("email", "Invalid Email address")
      .trim()
      .not()
      .isEmpty()
      .isEmail(),
  
    check("password", "password can't be empty")
      .trim()  
      .not()
      .isEmpty(),
  
     (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()){
        const errorArray  = new Set(errors.array().map(err => err.msg));
        message = [...errorArray].join(' , '); 
        return res.status(422).json({message});
      }
      next();
     } 
];


const signupValidation = [  
  check("name", "invalid name")
    .trim()
    .not()
    .isEmpty()
    .isAlpha('en-US', {ignore: '\s'}),

  check("email", "Invalid Email address")
    .trim()
    .not()
    .isEmpty()
    .isEmail(),

  check("password", "password can't be empty")
    .trim()  
    .not()
    .isEmpty(),

  check("role", "Invalid role")
    .trim()
    .not()
    .isEmpty()
    .isIn(["Freelancer", "Client"]),

   (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      const errorArray  = new Set(errors.array().map(err => err.msg));
      message = [...errorArray].join(' , '); 
      return res.status(422).json({message});
    }
    
    next();
   } 
];
  
  module.exports = {loginValidation, signupValidation};