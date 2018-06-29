const express = require('express');
const User = require('./usersModel');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/signup', (req, res) => {
  const postedPassword = req.body.password;

  bcrypt.hash(postedPassword, 10, function(err, hash) {
    if (err) {
      res.status(400).json('error in hash', err);
    }

    const newUser = {
      email: req.body.email,
      password: hash
    };

    User.create(newUser)
      .then((addedUser) => {
        res.status(200).json(addedUser);
      })
      .catch((err) => {
        res.status(400).send('No');
      });
  });
});

module.exports = router;
