const request = require('request');

const getCocoRecipes = (callback) => {
  let body = [];
  request.get('http://www.recipepuppy.com/api/?q=coconut')
    .on('response', (response) => {
      response.on('data', (chunk) => {
        body.push(chunk);
      });
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      const json = JSON.parse(body);
      const recipes = json.results;
      // console.log('json', json);
      // console.log('recipes', recipes);
      callback(recipes);
    });
};

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
      getCocoRecipes();
    } else if (res.statusCode === 200) {
      callback(JSON.parse(body.replace(/\r?\n|\r/g, '')));
    }
  });
};


module.exports.getRecipesByIngredient = getRecipesByIngredient;
module.exports.getCocoRecipes = getCocoRecipes;

