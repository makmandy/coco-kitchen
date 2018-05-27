const request = require('request');

const getRecipesByIngredient = (requestUrl, callback) => {
  let body = [];
  const options = {
    method: 'GET',
    url: requestUrl,
    headers: {
      'Content-type': 'application/json',
    },
  };
  
  request.get(requestUrl)
  .on('response', (response) => {
      response.on('data', (chunk) => {
      body.push(chunk);
      });
  })
  .on('end', () => {
    body = Buffer.concat(body).toString();
    const json = JSON.parse(body);
    const recipes = json.results;
    callback(recipes);
  });
};


module.exports.getRecipesByIngredient = getRecipesByIngredient;

