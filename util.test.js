const { destructDate } = require('./util');

describe('util.js', () => {
  it('destructDate()', () => {
    const date = new Date('2021-12-31');
    const { yyyy, m, d } = destructDate(date);
    expect(yyyy).toBe(2021);
    expect(m).toBe(12);
    expect(d).toBe(31);
  });
});