const db = require('./db.js');


exports.handleIngredient = (ingredient) => {
  return db('ingredients').select('id')
    .where('name', ingredient)
    .then((result) => {
      if (result.length === 0) {
        db('ingredients').insert({ name: `${ingredient}` })
          .then(() => console.log(`${ingredient} added to DB!`))
          .catch((err) => console.error(`Error adding ${ingredient} to DB. ${err}`))
      } else {
        db('ingredients').where('name', ingredient)
          .increment('count', 1)
          .then(() => console.log(`${ingredient} count incremented!`))
          .catch((err) => console.error(`Error incrementing ${ingredient} in DB. ${err}`));
      }
    });
};

exports.associateRecipeWithIngredient = (ingredient, recipeUrl) => {
  return db('recipes').select('id').where('href', recipeUrl)
    .then((result) => {
      let recipeID = result[0].id;
      db('ingredients').select('id').where('name', ingredient)
        .then((result) => {
          let ingredientID = result[0].id;
          console.log('ingredient id:', ingredientID);
          console.log('recipe id:', recipeID);
          db('ingredients_recipes').insert({id_ingredient: `${ingredientID}`, id_recipe: `${recipeID}`})
        })
    })
    .then(() => console.log(`Added association between recipe and ${ingredient}!`))
    .catch(err => console.error(`Error associating ${ingredient} with recipe. ${err}`));
};

exports.getPopularIngredients = () => {
  return db('ingredients').orderBy('count', 'desc');
};
