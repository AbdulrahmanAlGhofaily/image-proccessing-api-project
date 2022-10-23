import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('test root endpoint response', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets images endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });
});
