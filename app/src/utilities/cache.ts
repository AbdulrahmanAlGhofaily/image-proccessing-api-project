import path from 'path';
import fs from 'fs';

export default function cache(
  imageName: string,
  width: number,
  height: number
): boolean {
  if (
    !fs.existsSync(
      path.join(
        `${path.resolve()}`,
        'src',
        'assets',
        'thumb',
        `${imageName}_${width}_${height}_thumb.jpg`
      )
    )
  ) {
    return true;
  }
  return false;
}
