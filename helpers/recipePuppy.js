const request = require('request');

const getRecipesByIngredient = (ingredient, callback) => {
  const options = {
    method: 'GET',
    url: `http://www.recipepuppy.com/api/?q=coconut&i=${ingredient}`,
    headers: {
      'Content-type': 'application/json',
    },
  };

  request(options, (err, res, body) => {
    if (res.statusCode === 500 || res.statusCode === 404) {
      request.get('http://www.recipepuppy.com/api/?q=coconut')
        .on('response', (response) => {
          response.on('data', (data) => {
            callback(JSON.parse(data));
          });
        });
    } else if (res.statusCode === 200) {
      callback(JSON.parse(body.replace(/\r?\n|\r/g, '')));
    }
  });
};

const getCocoRecipes = (callback) => {
  request.get('http://www.recipepuppy.com/api/?q=coconut')
  .on('response', (response) => {
    response.on('data', (data) => {
      var recipes = JSON.parse(data).results;
      callback(recipes);
      });
    });
};


module.exports.getRecipesByIngredient = getRecipesByIngredient;
module.exports.getCocoRecipes = getCocoRecipes;
