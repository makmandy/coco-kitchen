var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coconut',
  database: 'kitchen'
});

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
  console.log('Connected to database!');
  }
});

var saveRecipe = (recipe) => {
  var name = recipe.name;
  var url = recipe.href;
  var imgurl = recipe.thumbnail;
  var queryString = `INSERT INTO recipes (name, url, imgurl) \
  VALUES (${name}, ${url}, ${description}, ${imgurl})`;

  connection.query(queryString, (err, result) => {
      if (err) throw err;
      console.log('Record inserted into Recipes');
    }
  );
};

var associateWithIngredient = (recipe) => {
  var queryString = `SELECT ingredients_recipes.id_ingredient \
    FROM ingredients_recipes INNER JOIN recipes WHERE id_recipe = recipes.id`;
  connection.query(queryString, (err, result) => {
    connection.query(`INSERT INTO ingredients_recipes (id_ingredient, id_recipe) \
    VALUE (${result}, ${recipe.id})`);
  }
};

module.exports.saveRecipe = saveRecipe;
module.exports.associateWithIngredient = associateWithIngredient;