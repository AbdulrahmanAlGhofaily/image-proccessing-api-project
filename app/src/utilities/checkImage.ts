import path from 'path';
import fs from 'fs';

function checkImage(imageName: string): string {
  if (!fs.existsSync(`${path.resolve()}\\assets\\full\\${imageName}.jpg`))
    throw new Error("Such image doesn't exist.");
  return imageName;
}

export default checkImage;
