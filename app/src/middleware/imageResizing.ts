import { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import checkURL from '../utilities/checkURL';
import checkImage from '../utilities/checkImage';
import isPositive from '../utilities/isPositive';

type QueryObject = {
  imageName?: string;
  width?: number | string;
  height?: number | string;
};

const resizeImage = async (req: Request, res: Response) => {
  try {
    const queryObj: QueryObject = checkURL(req.query);

    const imageName: string = String(
      checkImage(queryObj.imageName as unknown as string)
    );
    const width: number = isPositive(queryObj.width as unknown as string);
    const height: number = isPositive(queryObj.height as unknown as string);

    const image = await sharp(
      `${path.resolve()}\\assets\\full\\${imageName}.jpg`
    )
      .resize(width, height)
      .toFile(`${path.resolve()}\\assets\\thumb\\${imageName}_thumb.jpg`);
    return res.status(200).send({
      message: 'Request is fulfilled.',
      link: `${path.normalize(
        path.resolve()
      )}\\assets\\thumb\\${imageName}_thumb.jpg`,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).send({ message: error.message });
    }
  }
};

export default resizeImage;
