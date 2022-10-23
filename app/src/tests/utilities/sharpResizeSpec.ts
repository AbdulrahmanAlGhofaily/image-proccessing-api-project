import cache from '../../utilities/cache';
import sharpResize from '../../utilities/sharpResize';

describe('Check if resizing image function wroks', () => {
  it('Should pass if the passed values creates a new image', async () => {
    expect(await sharpResize('fjord', 100, 100)).toBeTrue();
  });

  it('Should pass if the passed values doesnt create new image since it is in the cache', async () => {
    expect(await sharpResize('fjord', 100, 100)).toBeTrue();
  });
});
