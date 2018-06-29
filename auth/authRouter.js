const express = require('express');
const router = express.Router();
const JWT = require('jsonwebtoken');
const User = require('./../users/usersModel');

router.post('/login', (req, res) => {
  // TODO: (replace) Pulls user from model
  //   const email = req.body.email;
  //   const pass = req.body.password;

  // TODO: (replace) verifies hashed password in model
  User.find({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(400);
        throw new Error('Incorrect email or password');
        return;
      }

      const [, , , ip_address] = req.ip.split(':');
      const payload = {
        id: user.id,
        ip_address
      };

      const JWT_SECRET = process.env.JWT_SECRET;
      const token = JWT.sign(payload, JWT_SECRET);

      res.status(200).json({
        message: 'you logged in',
        token
      });
    })
    .catch((err) => {});
});

module.exports = router;
