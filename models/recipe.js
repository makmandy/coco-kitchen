const db = require('./db.js');

exports.saveRecipe = (recipe) => {
  return db('recipes').select('*').where('name', recipe.name)
    .then((result) => {
      if (result.length === 0) {
        db('recipes').insert({
          name: recipe.name,
          href: recipe.href,
          thumbnail: recipe.thumbnail,
          count: 0
        })
      }
    })
    .catch(err => console.error('Error adding saving to the database', err));
};

exports.getTopRecipes = () => {
  return db('recipes').select('*').orderBy('count', 'desc');
};

exports.starRecipe = (recipe) => {
  return db('recipes').where('id', recipe.id).increment('count', 1);
};

