import isPositive from '../../utilities/isPositive';

describe('Check if the width/height has positive integrs', () => {
  it('Should pass if height/width is positive', () => {
    expect(isPositive(300)).toEqual(300);
  });

  it('Should throw error if height/width is negative integrs', () => {
    expect(function () {
      isPositive(-300);
    }).toThrow();
  });

  it('Should throw error if height/width is zero', () => {
    expect(function () {
      isPositive(0);
    }).toThrow();
  });
});
