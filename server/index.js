const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controller = require('./controllers.js');

// const router = require('./routes.js');

const app = express();
const port = process.env.PORT || 3306;

app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/recipes', controller.handleSearch);
// get /ingredients
// post /stars
// get /stars

app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});

