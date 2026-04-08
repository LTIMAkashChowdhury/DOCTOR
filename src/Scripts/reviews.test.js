import { customerReviews } from './reviews';

describe('customerReviews script', () => {
  test('exports an array of review objects', () => {
    expect(Array.isArray(customerReviews)).toBe(true);
    expect(customerReviews.length).toBeGreaterThan(0);
    expect(customerReviews[0]).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        location: expect.any(String),
        message: expect.any(String),
      })
    );
  });
});