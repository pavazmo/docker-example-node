'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/gateway', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server port 3000: \x1b[32m%s\x1b[0m', 'online');
})