const createDog = (name, age, weight) => ({
  name,
  age: parseInt(age),
  weight
});

module.exports = createDog;
