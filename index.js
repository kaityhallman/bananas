const findTheBananas = require('./banana');
const ingredients = require('./ingredients.json');
const products = require('./products.json');

console.log(
  findTheBananas(ingredients.ingredients, products.products)
);