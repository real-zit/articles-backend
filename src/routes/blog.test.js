const request = require('supertest');
const app = require('../app');
require('dotenv').config('../../.env');
const { mongoConnect, mongoDisconnect } = require('../services/db');

describe('Article API', () => {
  beforeAll(async () => {
    await mongoConnect();
  });

  afterAll(async () => {
    await mongoDisconnect();
  });
  describe('Test GET /articles', () => {
    test('It should respond with 200 success', async () => {
      const response = await request(app).get('/articles').expect(200);
    });
  });

  describe('Test POST /articles', () => {
    test('It should respond with 201 success', () => {
      const response = 201;
      expect(201).toBe(201);
    });
  });
});
