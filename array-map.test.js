const map = require('./custom-array-map.js');

describe('Array map method', () => {
  it('should apply the function to every element of the array and return a new array', () => {
    const arr = [1, 2, 3];
    const doubled = arr.map((value) => value * 2);
    expect(doubled).toEqual([2, 4, 6]);
  });

  it('should not modify the original array', () => {
    const arr = [1, 2, 3];
    const doubled = arr.map((value) => value * 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('should pass the index and the original array to the function', () => {
    const arr = [1, 2, 3];
    const mapped = arr.map((value, index, array) => {
      expect(array).toEqual([1, 2, 3]);
      return index;
    });
    expect(mapped).toEqual([0, 1, 2]);
  });

  it('should work with empty arrays', () => {
    const arr = [];
    const mapped = arr.map((value) => value * 2);
    expect(mapped).toEqual([]);
  });

  it('should work with arrays containing only one element', () => {
    const arr = [42];
    const mapped = arr.map((value) => value * 2);
    expect(mapped).toEqual([84]);
  });
});
