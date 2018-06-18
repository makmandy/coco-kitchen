const request = require('request');

exports.getRecipesByIngredient = (requestUrl, callback) => {
  let body = [];

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