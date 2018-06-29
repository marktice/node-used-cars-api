const Car = require('./../cars/carsModel');
const User = require('./../users/usersModel');

// const cars = [
//   { model: 'Toyota', color: 'blue' },
//   { model: 'Mercedes', color: 'red' },
//   { model: 'Fiat', color: 'grey' },
//   { model: 'BMW', color: 'white' }
// ];

// Car.insertMany(cars);
// Car.create(cars);

Car.remove()
  .then((cars) => {
    console.log(cars);
  })
  .catch((err) => {
    console.log(err);
  });

User.remove()
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    console.log(err);
  });

// const users = [
//   { email: 'test1@email.com', password: 'blue123' },
//   { email: 'test2@email.com', password: 'red123' },
//   { email: 'test3@email.com', password: 'grey123' },
//   { email: 'test4@email.com', password: 'white123' }
// ];

// User.create(users);
