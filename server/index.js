const express = require('express');
const bodyParser = require('body-parser');
const {saveRecipe, saveIngredient} = require('../database/index.js');
const {getRecipesByIngredient} = require('../helpers/recipePuppy.js');
const {connection} = require('../database/index.js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3306;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/recipes', (req, res) => {
  let reqUrl = `http://www.recipepuppy.com/api/?q=coconut`;
  let query = req.query.ingredient;

  if (query !== undefined) {
    query = query.split(' ').join('+');
    reqUrl = reqUrl + '&i=' + query;
  }
  getRecipesByIngredient(reqUrl, recipes => {
    var cocoRecipes = [];
    recipes.forEach((item) => {
      var recipe = [];
      var name = item.title;
      var url = item.href;
      recipe.push(name, url);
      cocoRecipes.push(recipe);
    });
    res.send(cocoRecipes);
  });
});

app.get('/recipes', (req, res) => {
  let reqUrl = `http://www.recipepuppy.com/api/?q=coconut`;
  let query = req.query.ingredient;
  
  if (query !== undefined) {
    query = query.split(' ').join('+');
    reqUrl = reqUrl + '&i=' + query;
  }
  getRecipesByIngredient(reqUrl, recipes => {
    var cocoRecipes = [];
    recipes.forEach((item) => {
      var recipe = [];
      var name = item.title;
      var url = item.href;
      recipe.push(name, url);
      cocoRecipes.push(recipe);
    });
    res.send(cocoRecipes);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});

