const db = require('./db.js');


exports.handleIngredient = (ingredient) => {
  return db('ingredients').select('*')
    .where('name', ingredient)
    .then((result) => {
      if (result.length === 0) {
        db('ingredients').insert('name', ingredient)
          .then(() => console.log(`${ingredient} added to DB!`));
      } else {
        db('ingredients').where('name', ingredient)
          .increment('count', 1)
          .then(() => console.log(`${ingredient} count incremented!`));
      }
    })
    .then(() => console.log(`${ingredient} handled by DB!`))
    .catch(err => console.error(`Error adding ${ingredient} to database: ${err}`));
};

exports.associateRecipeWithIngredient = (ingredient, recipeID) => {
  return db('ingredients').select('id').where('name', ingredient)
    .then((id) => {
      db('ingredients_recipes').insert({ id_ingredient: id, id_recipe: recipeID });
    });
};

exports.getPopularIngredients = () => {
  return db('ingredients').orderBy('count', 'desc');
};
