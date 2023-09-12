require('dotenv').config();
const express = require('express');

let app = express();

app.use(express.json());
app.use(express.static('assets'));

var routeHandler = require('./routes/handler.js');
app.use('/', routeHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});