const express = require('express');
const app = express();
const tourRoute = require('./Routes/tourRoute');
const userRoute = require('./Routes/userRoute');

// Middleware built-in in express
app.use(express.json());
app.use(express.static(`${__dirname}/public/`));

// My own Middleware
app.use((req, res, next) => {
  console.log('This is my own middleware hahaHaa:)');
  next();
});

// Routes

app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
