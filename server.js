const express = require('express');
const apiRoutes = require('./apiRoutes.js');
const htmlRoutes = require('./htmlRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express(); 

//Middleware for serving static files (public directory)
app.use(express.static(path.join(__dirname, './public')));

// Middleware for parsing urlencoded form data
app.use(express.urlencoded({  extended: true  }));

//Middleware for parsing JSON data
app.use(express.json());


app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);