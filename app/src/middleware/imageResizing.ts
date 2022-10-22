import { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';
import checkURL from '../utilities/checkURL';
import checkImage from '../utilities/checkImage';
import isPositive from '../utilities/isPositive';
import { QueryObject } from '../types/QueryObject';
import cache from '../utilities/cache';

const resizeImage = async (req: Request, res: Response) => {
  try {
    const queryObj: QueryObject = checkURL(req.query);

    // eslint-disable-next-line
    const imageName: string = String(
      checkImage(queryObj.imageName as unknown as string)
    );
    const width: number = isPositive(queryObj.width as unknown as string);
    const height: number = isPositive(queryObj.height as unknown as string);

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
    res.send({
      statusCode: 200,
      message: 'Request is fulfilled.',
      link: path.join('thumb', `${imageName}_${width}_${height}_thumb.jpg`),
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).send({ message: error.message });
    }
  }
};

export default resizeImage;
