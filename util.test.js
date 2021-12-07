const { destructDate, formatDate } = require('./util');

describe('util.js', () => {
  it('destructDate()', () => {
    const date = new Date('2021-12-31');
    const { yyyy, m, d } = destructDate(date);
    expect(yyyy).toBe(2021);
    expect(m).toBe(12);
    expect(d).toBe(31);
  });

  it('formatDate()', () => {
    expect(formatDate).toBeTruthy();

    const yyyymmdd = '2021-12-31';
    // console.log({ yyyymmdd });

    const date = new Date(yyyymmdd);
    const yyyymmdd2 = formatDate(date, 'yyyy-mm-dd');
    // console.log({ yyyymmdd2 });
    expect(yyyymmdd2).toBe(yyyymmdd);

    const yyyymmdd3 = formatDate(new Date(date), 'yyyy-mm-dd');
    // console.log({ yyyymmdd3 });
    expect(yyyymmdd3).toBe(yyyymmdd);

    const yyyymmddB = '2021/12/31';
    const yyyymmdd4 = formatDate(new Date(yyyymmddB), 'yyyy-mm-dd');
    // console.log({ yyyymmddB, yyyymmdd4 });
    expect(yyyymmdd4).toBe(yyyymmdd);
    expect(yyyymmdd4).not.toBe(yyyymmddB);
  });
});