export type FruitData = {
  data: {
    values: {
      actual: string[];
      observed: string[];
      count: number;
    }[];
  };
};

// https://github.com/apple/ml-hierarchical-confusion-matrix/blob/main/public/data/fruit.json
export const fruit_data: FruitData = {
  data: {
    values: [
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 500,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 48,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 30,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 39,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 8,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 19,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 14,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 102,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 59,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 35,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 23,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 10,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 27,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 21,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 15,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 32,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 69,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 101,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 46,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 30,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 29,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 22,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 8,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 1,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 33,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 50,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 130,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 47,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 37,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 39,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 34,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 2,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 23,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 34,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 53,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 91,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 36,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 43,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 22,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 2,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 15,
      },
      {
        actual: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 6,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 22,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 99,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 39,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 14,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 4,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 5,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 14,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 14,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 13,
      },
      {
        actual: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 18,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 4,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 13,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 48,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 1,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 27,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 63,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 91,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 58,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 33,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 18,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 4,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 17,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 18,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 28,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 5,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 22,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 29,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 20,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 70,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 82,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 68,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 12,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 25,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 9,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 32,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 8,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 19,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 47,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 110,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 49,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 15,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 4,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 38,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 19,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 15,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 4,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 15,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 10,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 41,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 97,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 60,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 31,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 24,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 3,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 11,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 8,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 13,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 36,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 38,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 2,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 10,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 24,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 56,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 19,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 12,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 27,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 10,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 15,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 31,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 41,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 33,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:not-ripe'],
        count: 50,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 63,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 78,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 46,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 42,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 9,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:ripe'],
        count: 6,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 9,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 38,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 31,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 47,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 93,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 42,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 14,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 42,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 27,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 20,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 12,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 1,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 29,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:tangy', 'ripeness:ripe'],
        count: 10,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 11,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 28,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 7,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 40,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 41,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 93,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 50,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 9,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 13,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 20,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 8,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 2,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 13,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 26,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 26,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 43,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 42,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 34,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 24,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 11,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 7,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sweet', 'ripeness:not-ripe'],
        count: 2,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 30,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 20,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sour', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 19,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 22,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 50,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 94,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 62,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 7,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:not-ripe'],
        count: 25,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 10,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 19,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 34,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 63,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 98,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 44,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 20,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 21,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 14,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 12,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 16,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 13,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 21,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 52,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 65,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 74,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 32,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 23,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 36,
      },
      {
        actual: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 35,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 2,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 3,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 15,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 7,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 29,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 32,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 7,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 93,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 54,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 34,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 26,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'taste:sour', 'ripeness:ripe'],
        count: 7,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lemon', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 13,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:ripe'],
        count: 0,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sweet', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 23,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 10,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 17,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 15,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 37,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 113,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 56,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 35,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:ripe'],
        count: 15,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:sweet', 'ripeness:not-ripe'],
        count: 0,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 17,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 24,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:not-ripe'],
        count: 22,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 25,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 27,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 99,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 58,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:ripe'],
        count: 9,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:lime', 'taste:tangy', 'ripeness:not-ripe'],
        count: 22,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:sour', 'ripeness:ripe'],
        count: 6,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:ripe'],
        count: 11,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:citrus:orange', 'taste:tangy', 'ripeness:not-ripe'],
        count: 16,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:ripe'],
        count: 12,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sweet', 'ripeness:not-ripe'],
        count: 23,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:ripe'],
        count: 49,
      },
      {
        actual: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        observed: ['fruit:pome:apple', 'taste:sour', 'ripeness:not-ripe'],
        count: 102,
      },
    ],
  },
};
