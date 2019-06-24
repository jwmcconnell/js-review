const { getState } = require('./store');

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
});
