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
    const response = await request(app).get('/cards/card003')
    expect(response.body).toEqual(expect.objectContaining({
      title: 'card 3 title',
      imageUrl: '/front-cover-landscape.jpg',
      card_id: 'card003',
      base_price: 200,
      availableSizes: expect.any(Array),
      pages: expect.any(Array)
    }))
  })
  test('should return formated available sizes', async () => {
    const response = await request(app).get('/cards/card001')
    expect(response.body.availableSizes).toEqual([{
      "id": "sm",
      "title": "Small"
    },
    {
      "id": "md",
      "title": "Medium"
    },
    {
      "id": "gt",
      "title": "Giant"
    }])
  });
  test('should return pages', async () => {
    const response = await request(app).get('/cards/card001')
    expect(response.body.pages).toEqual([
      {
        "title": "Front Cover",
        "templateId": "template001"
      },
      {
        "title": "Inside Left",
        "templateId": "template002"
      },
      {
        "title": "Inside Right",
        "templateId": "template003"
      },
      {
        "title": "Back Cover",
        "templateId": "template004"
      }
    ])
  });
});
