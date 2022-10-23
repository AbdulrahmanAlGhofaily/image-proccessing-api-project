import { NextFunction, Request, Response } from 'express';
import path from 'path';
import checkURL from '../utilities/checkURL';
import checkImage from '../utilities/checkImage';
import isPositive from '../utilities/isPositive';
import { QueryObject } from '../types/QueryObject';
import sharpResize from '../utilities/sharpResize';

const resizeImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const queryObj: QueryObject = checkURL(req.query);

    // eslint-disable-next-line
    const imageName: string = String(
      checkImage(queryObj.imageName as unknown as string)
    );
    const width: number = isPositive(queryObj.width as unknown as string);
    const height: number = isPositive(queryObj.height as unknown as string);

    await sharpResize(imageName, width, height);

    // If you wanna use the UI, uncomment this part

    // res.send({
    //   statusCode: 200,
    //   message: 'Request is fulfilled.',
    //   link: path.join('thumb', `${imageName}_${width}_${height}_thumb.jpg`),
    // });

    // If you want to recieve the image throw the same link, use this part

    res.sendFile(
      path.join('thumb', `${imageName}_${width}_${height}_thumb.jpg`),
      { root: path.join('src', 'assets') }
    );
    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).send({ message: error.message });
    }
  }
};

export default resizeImage;
