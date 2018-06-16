const axios = require('axios');

const getRecipesByIngredient = (requestUrl, callback) => {
  axios.get(requestUrl)
    .then((result) => {
      callback(result.data.results);
    })
    .catch((err) => {
      console.error('Error getting recipes', err);
    });
};


module.exports.getRecipesByIngredient = getRecipesByIngredient;
