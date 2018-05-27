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
  const imgurl = JSON.stringify(recipe.thumbnail);
  const queryString = `INSERT INTO recipes (name, url, imgurl) \
  VALUES (${name}, ${url}, ${imgurl})`;

  connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log('Record inserted into recipes!');
  });
};

const saveIngredient = (ingredient) => {
  const queryString = `INSERT INTO ingredients (name) \
  VALUES (${ing})`;

  connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log('Record inserted into ingredients!');
  });
};


module.exports.saveRecipe = saveRecipe;
module.exports.saveIngredient = saveIngredient;
module.exports.connection = connection;

// mysql.server start

// hi coco :)
// hi googi <3
