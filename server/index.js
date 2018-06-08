const express = require('express');
const bodyParser = require('body-parser');
const {saveRecipe, saveIngredient} = require('./database/connection.js');
const {getRecipesByIngredient} = require('../helpers/recipePuppy.js');
const {connection} = require('./database/connection.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3306;

app.use(express.static(path.join(__dirname,'/../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/recipes', (req, res) => {
  let reqUrl = `http://www.recipepuppy.com/api/?q=coconut`;
  let query = req.body.ingredient;

  if (query !== undefined) {
    query = query.split(' ').join('+');
    reqUrl = reqUrl + '&i=' + query;
  }
  getRecipesByIngredient(reqUrl, (recipes) => {
    res.send(recipes);
  });
});

app.get('/recipes', (req, res) => {
  let reqUrl = `http://www.recipepuppy.com/api/?q=coconut`;
  let query = req.body.ingredient;
  
  if (query !== undefined) {
    query = query.split(' ').join('+');
    reqUrl = reqUrl + '&i=' + query;
  }
  getRecipesByIngredient(reqUrl, (recipes) => {
    res.send(recipes);
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});

