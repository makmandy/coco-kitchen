const db = require('./db.js');

exports.saveRecipe = (recipe) => {
  return db('recipes').select('*').where('name', recipe.name)
  .then(result => {
    if (result.length === 0) {
      db('recipes').insert({
        name: recipe.name,
        href: recipe.href
      })
    } else {
    }
  })
  .catch(err => console.error('Error adding recipe to the database', err));
};