const db = require('./db.js');

exports.handleIngredient = (ingredient) => {
  return db('ingredients').select('*')
    .where('ingredient', ingredient)
    .then(result => {
      if (result.length === 0) {
        db('ingredients').insert({ingredient: ingredient})
      } else {
        db('ingredients').where('ingredient', ingredient)
        .increment('count', 1)
      }
    });
};