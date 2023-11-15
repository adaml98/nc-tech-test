import * as request from 'supertest'
import { app } from '../server'

describe('GET /cards', () => {
  test('should return status code 200', async () => {
    const response = await request(app).get('/cards');
    expect(response.status).toBe(200);
  });
});



test.skip('returns matching card title', async () => {
  const response = await request(app).get('/cards/card001')

  expect(response.status).toBe(200)
  expect(response.body).toEqual(expect.objectContaining({
    title: 'card 1 title',
  }))
})
