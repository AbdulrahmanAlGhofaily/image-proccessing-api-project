import path from 'path';
import sharp from 'sharp';
import cache from './cache';

async function sharpResize(
  imageName: string,
  width: number,
  height: number
): Promise<boolean> {
  if (cache(imageName, width, height)) {
    await sharp(
      path.join(path.resolve(), 'src', 'assets', 'full', `${imageName}.jpg`)
    )
      .resize(width, height)
      .toFile(
        path.join(
          path.resolve(),
          'src',
          'assets',
          'thumb',
          `${imageName}_${width}_${height}_thumb.jpg`
        )
      );
  }
  return true;
}

export default sharpResize;
