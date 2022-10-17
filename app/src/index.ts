import express from 'express';
import { RequestInfo, RequestInit } from 'node-fetch';

const fetch = (url: RequestInfo, init?: RequestInit) =>
  import('node-fetch').then(({ default: fetch }) => fetch(url, init));
import NodeCache from 'node-cache';
import routes from './routes/index';
import cors from 'cors';

const myCache = new NodeCache();

const imageLink = 'http://localhost:3000/api/images';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  if (myCache.has('images')) {
    return res.send(myCache.get('images'));
  } else {
    fetch(imageLink)
      .then((response) => response.json)
      .then((json) => {
        myCache.set('images', json);
        res.send(json);
      });
  }
});

app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
