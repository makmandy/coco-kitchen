const db = require('./db.js');

exports.saveRecipe = (recipe) => {
  return db('recipes').insert({
    name: recipe.name,
    href: recipe.href,
    thumbnail: recipe.thumbnail,
  })
    .then(() => console.log('Recipe added to database!'))
    .catch(err => console.error('Error adding saving to the database', err));
};

exports.getTopRecipes = () => {
  return db('recipes').select('*').orderBy('count', 'desc');
};

exports.starRecipe = (recipe) => {
  return db('recipes').where('id', recipe.id).increment('count', 1);
};

exports.getRecipeID = (recipe) => {
  return db('recipes').select('id').where('href', recipe.href);
};

exports.getRecipeByID = (recipe) => {
  return db('recipes').select('*').where('id', recipe.id);
};