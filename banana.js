function findTheBananas(ingredients, products) {
  // Search through the ingredients, until we find the 🍌, and fetch it by id
  // Time complexity: O(N), because we may have to search through the entire list to find the 🍌
  const banana = ingredients.find(ingredient => ingredient.name.toLowerCase() === 'organic banana');
  if (typeof banana === 'undefined') {
    throw new Error('No bananas 😭');
  }
  // Find all of the 🍌!
  // Time complexity: O(N) as we look through each product to see if it includes a 🍌
  return products.filter(product => product.ingredient_ids.includes(banana.id));
}

module.exports = findTheBananas;