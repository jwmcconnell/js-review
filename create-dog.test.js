const createDog = require('./create-dog');

describe('dog create function', () => {
  it('returns a dog object', () => {
    const dog = createDog('spot', 5, '20lbs');
    expect(dog).toEqual({
      name: 'spot',
      age: 5,
      weight: '20lbs'
    });
  });

  it('returns a dog with an int for age after string is input', () => {
    const dog = createDog('fido', '6', '15lbs');
    expect(dog).toEqual({
      name: 'fido',
      age: 6,
      weight: '15lbs'
    });
  });
});
