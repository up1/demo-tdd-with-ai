const request = require('supertest');
const app = require('./app'); // Assuming Express app is exported from app.js

describe('GET /users/:id', () => {
  test('Success: Should retrieve user with ID 1', async () => {
    const res = await request(app).get('/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ id: 1, name: 'Somkiat' });
  });

});
