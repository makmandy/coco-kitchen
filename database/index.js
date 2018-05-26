const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'kitchen'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
  console.log('Connected to database!');
  }
});

const saveRecipe = (recipe) => {
  let name = JSON.stringify(recipe.title);
  let url = JSON.stringify(recipe.href);
  let imgurl = JSON.stringify(recipe.thumbnail);
  let queryString = `INSERT INTO recipes (name, url, imgurl) \
  VALUES (${name}, ${url}, ${imgurl})`;

  connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log('Record inserted into recipes!');
    }
  );
};

const saveIngredient = (ingredient) => {
  let ingredient = JSON.stringify(ingredient);
  let queryString = `INSERT INTO ingredients (name) |
  VALUES (${ingredient})`;

  connection.query(queryString, (err, result) => {
    if (err) throw err;
    console.log('Record inserted into ingredients!')
  })
}

const associateWithIngredient = (recipe) => {
  let queryString = `SELECT ingredients_recipes.id_ingredient \
    FROM ingredients_recipes INNER JOIN recipes WHERE id_recipe = recipes.id`;
  
    connection.query(queryString, (err, result) => {
    connection.query(`INSERT INTO ingredients_recipes (id_ingredient, id_recipe) \
    VALUE (${result}, ${recipe.id})`);
  });
};

module.exports.saveRecipe = saveRecipe;
module.exports.associateWithIngredient = associateWithIngredient;

// mysql.server start