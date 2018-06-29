const express = require('express');
const JWT = require('jsonwebtoken');
const { Bearer } = require('permit');

const Car = require('./carsModel');

const router = express.Router();
1;
const permit = new Bearer();
const JWT_SECRET = process.env.JWT_SECRET;

router.get('/', (req, res) => {
  Car.find()
    .then((cars) => {
      if (cars.length === 0) {
        throw new Error();
      }

      try {
        const token = permit.check(req);
        const decoded = JWT.verify(token, JWT_SECRET);
        if (decoded.id !== 1) {
          throw new Error();
        }
        res.status(200).json(cars);
      } catch (error) {
        res.status(401).json({ message: 'bad boy' });
      }
    })
    .catch((err) => {
      res.status(200).json({ message: 'no cars' });
    });
});

module.exports = router;
