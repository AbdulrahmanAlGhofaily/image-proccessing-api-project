import express from 'express';
import resizeImage from '../../middleware/imageResizing';

const images = express.Router();

images.get('/', async (req, res, next) => {
  const respond = await resizeImage(req);
  res.send(respond);
  next();
});

export default images;
