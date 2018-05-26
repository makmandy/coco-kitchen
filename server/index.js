const express = require('express');
const bodyParser = require('body-parser');
const {saveRecipe, associateWithIngredient} = require('../database/index.js');
const {getRecipesByIngredient} = require('../helpers/recipePuppy.js');

const app = express();
const port = process.env.PORT || 3306;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post('/recipes', (req, res) => {
  var ingredient = req.body.ingredient;
  getRecipesByIngredient(ingredient, (res) => {
    var recipes = res.results;
    recipes.forEach((recipe) => {
      saveRecipe(recipe);
    });
  });
});

app.get('/recipes', (req, res) => {
  getRecipesByIngredient(req.body.ingredient, (recipes) => {
    res.send(recipes);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port} :)`);
});