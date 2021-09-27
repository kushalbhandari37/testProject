const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('email')
    .not()    
    .isEmpty()
    .withMessage('Email field cannot be empty!')
    .isEmail()
    .withMessage('Please enter valid email address')
    ,    
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name cannot be empty'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];