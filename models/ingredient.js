const db = require('./db.js');


exports.handleIngredient = (ingredient) => {
  return db('ingredients').select('id').where('name', ingredient)
    .then((result) => {
      if (result.length === 0) {
        db('ingredients').insert({ name: `${ingredient}` })
          .then(() => console.log(`${ingredient} added to DB!`))
          .catch((err) => console.error(`Error adding ${ingredient} to DB. ${err}`))
      } else {
        db('ingredients').where('name', ingredient)
          .increment('count', 1)
          .then(() => console.log(`${ingredient} count incremented!`))
          .catch(err => console.error(`Error incrementing ${ingredient} in DB. ${err}`));
      }
    });
};

exports.getPopularIngredients = () => {
  return db('ingredients').orderBy('count', 'desc');
};
