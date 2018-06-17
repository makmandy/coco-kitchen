const ingredients = require('../models/ingredient.js');
const recipes = require('../models/recipe.js');
const API = require('../APIhelper.js');

exports.handleSearch = (req, res) => {
  let reqUrl = 'http://www.recipepuppy.com/api/?q=coconut';
  let query = req.query.ingredient;

  if (query !== undefined) {
    query = query.split(' ').join('+');
    reqUrl = `${reqUrl}&i=${query}`;
  }
  ingredients.handleIngredient(req.query.ingredient);

  API.getRecipesByIngredient(reqUrl, (results) => {
    res.send(results);
    results.forEach((recipe) => {
      recipes.saveRecipe(recipe);
    });
  });
};