const request = require('request');
const parser = require('body-parser');

const getRecipesByIngredient = (requestUrl, callback) => {
  let body = [];
  const options = {
    method: 'GET',
    url: requestUrl,
    headers: {
      'Content-type': 'application/json'
    },
  };
  
  request.get(requestUrl)
  // .on('response', (response) => {
  //     response.on('data', (chunk) => {
  //     body.push(chunk);
  //     });
  // })
  // .on('end', () => {
  //   body = Buffer.concat(body).toString();
  //   const json = JSON.parse(body);
  //   const recipes = json.results;
  //   callback(recipes);
  // });
  // .on('data', (data) => {
  //   body = JSON.parse(data);
  //   const recipes = json.results;
  // }
};

const getRecipesByIngredient = (requestUrl, callback) => {
  let body = [];
  const options = {
    method: 'GET',
    url: requestUrl,
    headers: {
      'Content-type': 'application/json'
    }
  };

  request.get(requestUrl)
  .on('response', (response) => {
    response.on('data', (chunk) => {
      body.push(chunk);
    })
  })
  .on('end', () => {
    
  }
}

module.exports.getRecipesByIngredient = getRecipesByIngredient;

