const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express(); 

//Middleware for parsing JSON and urlencoded form data
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({  extended: true  }));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);