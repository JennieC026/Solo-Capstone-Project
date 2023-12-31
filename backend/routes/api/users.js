const express = require('express')
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { route } = require('./session');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors
  ];

 router.post('/',validateSignup,
 async(req,res)=>{
    const { firstName,lastName,email, password, username, phoneNumber } = req.body;
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({firstName,lastName,email,username,hashedPassword,photoUrl:'https://cdn.discordapp.com/attachments/811082976501825539/1139063953331331153/amber-profile_copy.jpg',phoneNumber});

    const safeUser = {
      id:user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      email:user.email,
      username:user.username,
      photoUrl:user.photoUrl,
      phoneNumber:user.phoneNumber,
    };

    await setTokenCookie(res, safeUser);

    return res.json({
        user:safeUser
    })
 })


module.exports = router;