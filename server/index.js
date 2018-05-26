const express = require('express');
const bodyParser = require('body-parser');
const {saveRecipe, saveIngredient} = require('../database/index.js');
const {getRecipesByIngredient, getCocoRecipes} = require('../helpers/recipePuppy.js');
const {connection} = require('../database/index.js');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = process.env.PORT || 3306;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/recipes', (req, res) => {
  var ingredient = req.body.ingredient;
  getRecipesByIngredient(ingredient, (resp) => {
    var recipes = resp.results;
    saveIngredient(ingredient);
    console.log(recipes);
    recipes.forEach((recipe) => {
      saveRecipe(recipe);
      res.send();
    });
  });
});

app.get('/recipes', (req, res) => {
  console.log('req.params.ingredient', req.params.ingredient);
  getCocoRecipes(req.params.ingredient, (recipes) => {
    var cocoRecipes = [];
    recipes.forEach((item) => {
      var recipe = [];
      var name = item.title;
      var url = item.href;
      recipe.push(name, url);
      cocoRecipes.push(recipe);
    });
    console.log('what are the recipes', cocoRecipes)
    res.send(cocoRecipes);
  });
});


app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});
