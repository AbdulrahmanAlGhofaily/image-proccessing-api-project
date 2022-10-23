import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('server root');
});

app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
