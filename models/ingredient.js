const db = require('./db.js');


exports.handleIngredient = (ingredient) => {
  return db('ingredients').select('*')
    .where('ingredient', ingredient)
    .then((result) => {
      if (result.length === 0) {
        db('ingredients').insert({ ingredient });
      } else {
        db('ingredients').where('ingredient', ingredient)
          .increment('count', 1);
      }
    })
    .then(() => console.log(ingredient, ' added to database!'))
    .catch(err => console.error(`Error removing ${ingredient} from database: ${err}`));
};

exports.associateRecipeWithIngredient = (ingredient, recipeID) => {
  return db('ingredients').select('id').where('ingredient', ingredient)
    .then((id) => {
      db('ingredients_recipes').insert({ id_ingredient: id, id_recipe: recipeID });
    });
  };

exports.getPopularIngredients = () => {
  return db('ingredients').orderBy('count', 'desc');
};
