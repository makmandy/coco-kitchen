const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kitchen',
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to database!');
  }
});

const saveRecipe = (recipe) => {
  const name = JSON.stringify(recipe.title);
  const url = JSON.stringify(recipe.href);
  // ingredients, thumbnail
  // do i need to stringify???
  const queryString = `INSERT INTO recipes (name, href, ingredients, thumbnail) \
  VALUES ('${name}', '${url}')`;

  connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log('Record inserted into recipes!');
  });
};

const saveIngredient = (ingredient) => {
  const queryString = `INSERT INTO ingredients (name) \
  VALUES ('${ingredient}')`;

  connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log('Record inserted into ingredients!');
  });
};


module.exports.saveRecipe = saveRecipe;
module.exports.saveIngredient = saveIngredient;
module.exports.connection = connection;