const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return a random number between 1 and 6', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/Ваше випадкове число: [1-6]/);
  });
});