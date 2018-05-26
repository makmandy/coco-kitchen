const express = require('express');
const bodyParser = require('body-parser');
const {saveRecipe, saveIngredient, associateWithIngredient} = require('../database/index.js');
const {getRecipesByIngredient} = require('../helpers/recipePuppy.js');

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
  console.log('res.results: ', res.results);
  getRecipesByIngredient('coconut', (recipes) => {
    res.send(recipes.results);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});