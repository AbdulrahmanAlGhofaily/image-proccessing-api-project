import checkURL from '../../utilities/checkURL';

describe('Check if the URL has the right proprties', () => {
  it('Should pass if the req.query (URL) has the right proprties', () => {
    expect(checkURL({ imageName: 'f', width: '2', height: '3' })).toEqual({
      imageName: 'f',
      width: '2',
      height: '3',
    });
  });

  it('Should throw error if the req.query (URL) has the wrong proprties', () => {
    expect(function () {
      checkURL({ d: 'f', s: '2', a: '3' });
    }).toThrow();
  });

  it('Should throw error if the req.query (URL) has no proprties', () => {
    expect(function () {
      checkURL({});
    }).toThrow();
  });
});
