const mongoose = require('mongoose');

// const url = 'mongodb+srv://brewster-f8jnl.mongodb.net/test';
// const options = {
//   user: 'marktice',
//   pass: process.env.MONGODB_USER_PASSWORD,
//   dbName: 'brewstercars',
//   promiseLibrary: gloabl.promise
// };

// mongoose
//   .connect(
//     url,
//     options
//   )
//   .then(() => {
//     console.log('mongodb connection established');
//   })
//   .catch((err) => {
//     console.log(mongodbfailure, err.message);
//   });

mongoose.connect('mongodb://localhost:27017/usedcars');

const db = mongoose.connection;

db.on('connected', () => {
  console.log('connection establised');
});

module.exports = mongoose;
