const findTheBananas = require('./banana');

const ingredients = [
  {
    id: 2,
    name: 'Macadamia nut',
    is_allergen: true,
  },
  {
    id: 3,
    name: 'OrgAnic BAnAnA',
    is_allergen: false,
  },
];

const products = [
  {
    id: 3,
    name: 'Chocolate + Blueberry',
    collection: 'smoothie',
    ingredient_ids: [
      3,
      4,
      4,
      6,
      10,
    ],
  },
  {
    id: 4,
    name: 'Ginger + Greens',
    collection: 'smoothie',
    ingredient_ids: [
      3,
      4,
      4,
      6,
      10,
    ],
  },
  {
    id: 3,
    name: 'Mushroom + Miso',
    collection: 'soup',
    ingredient_ids: [
      22,
      23,
      7,
      24,
      25,
      12
    ],
  },
];

describe('🍌', () => {
  it('should find the 🍌🍌🍌', () => {
    const [chocolateBlueberry, gingerGreens] = products;
    const expectedProducts = [chocolateBlueberry, gingerGreens];
    expect(findTheBananas(ingredients, products)).toEqual(expectedProducts);
  });

  it('should throw an error if no 🍌', () => {
    try {
      findTheBananas([], products);
    } catch (error) {
      expect(error.message).toEqual('No bananas 😭');
    }
  });
});