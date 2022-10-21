const fs = require('fs');
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

const app = express();

const AppError = require('./utils/appError');


//Env Config
dotenv.config();

// Allow us to use request body
app.use(express.json());

/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */
const articleRouter = require('./routes/articleRoutes');

app.use('/blog-api/v1/articles', articleRouter);


app.all("*", (req,res) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

module.exports = app;