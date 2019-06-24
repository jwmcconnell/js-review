const { getState, updateState } = require('./store');

describe('store functions', () => {
  it('returns the current state of the store', () => {
    const state = getState();
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });

  it('updates the current state with a given key value pair', () => {
    const state = getState();
    updateState('toys', 80);
    expect(state).toEqual({
      shirts: 5,
      pants: 10,
      toys: 80,
      shoes: 1,
      apples: 9
    });
  });
});
