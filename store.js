const state = {
  shirts: 5,
  pants: 10,
  toys: 100,
  shoes: 1,
  apples: 9
};

const getState = () => (state);

const updateState = (key, value) => {
  state[key] = value;
};

module.exports = { getState, updateState };
