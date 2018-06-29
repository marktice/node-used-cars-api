const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const carsRouter = require('./cars/carsRouter');
const authRouter = require('./auth/authRouter');
const usersRouter = require('./users/usersRouter');

const PORT = 3000;

app.use(bodyParser.json());
app.use('/cars', carsRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.info(`server listening on port ${PORT}`);
});
