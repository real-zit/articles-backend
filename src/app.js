const express = require('express');
const blogRouter = require('./routes/blog.routes');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/articles', blogRouter);
app.use((req, res, next) => {
  const error = new Error('Not Found');
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
