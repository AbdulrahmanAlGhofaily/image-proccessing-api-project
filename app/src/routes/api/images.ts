import express from 'express';
import resizeImage from '../../middleware/imageResizing';

const images = express.Router();

images.get('/', async (req, res, next) => {
  await resizeImage(req, res);
  next();
});

export default images;
