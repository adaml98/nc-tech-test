import * as request from 'supertest'
import { app } from '../server'

describe('GET /cards', () => {
  test('should return status code 200', async () => {
    const response = await request(app).get('/cards');
    expect(response.status).toBe(200);
  });
    test('should return an array', async () => {
    const response = await request(app).get('/cards');
    expect(Array.isArray(response.body)).toBe(true);
  });
  test('should return array of cards with title, imageUrl and card_id', async () => {
  const response = await request(app).get('/cards')
  expect(response.body).toEqual([{
    "title": "card 1 title",
    "imageUrl": "/front-cover-portrait-1.jpg",
    "card_id": "card001"
  },
  {
    "title": "card 2 title",
    "imageUrl": "/front-cover-portrait-2.jpg",
    "card_id": "card002"
  },
  {
    "title": "card 3 title",
    "imageUrl": "/front-cover-landscape.jpg",
    "card_id": "card003"
  }]);
})
});


describe('GET /cards/:cardId', () => {
  test('should return status code 200', async () => {
    const response = await request(app).get('/cards/card001');
    expect(response.status).toBe(200);
  });
  test('should return an object', async () => {
    const response = await request(app).get('/cards/card001');
      expect(typeof response.body).toBe('object');
  });
  test('should return matching card', async () => {
    const response = await request(app).get('/cards/card001')
    expect(response.body).toEqual(expect.objectContaining({
      title: expect.any(String),
      imageUrl: expect.any(String),
      card_id: expect.any(String),
      base_price: expect.any(Number),
      availableSizes: expect.any(Array),
      pages: expect.any(Array)
    }))
  })
});
