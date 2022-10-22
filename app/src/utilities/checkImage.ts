import path from 'path';
import fs from 'fs';

function checkImage(imageName: string): string {
  if (
    !fs.existsSync(
      path.join(
        `${path.resolve()}`,
        'src',
        'assets',
        'full',
        `${imageName}.jpg`
      )
    )
  )
    throw new Error('Such image doesn\t exist.');
  return imageName;
}

export default checkImage;
