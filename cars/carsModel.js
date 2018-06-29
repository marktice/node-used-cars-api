const mongoose = require('../db/init');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  model: String,
  color: String
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
