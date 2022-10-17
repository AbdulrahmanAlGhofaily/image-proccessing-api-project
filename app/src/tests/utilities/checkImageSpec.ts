import checkImage from '../../utilities/checkImage';

describe('Check if image with such name exist or no', () => {
  it('Should pass if the image with real name exist', () => {
    expect(checkImage('fjord')).toEqual('fjord');
  });

  it('Should throw error if the image with fake name does not exist', () => {
    expect(function () {
      checkImage('daa');
    }).toThrow();
  });
});
