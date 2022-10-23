import express from 'express';
import resizeImage from '../../middleware/imageResizing';

const images = express.Router();

images.use(resizeImage);

images.get('/', (req, res): void => {});

export default images;
