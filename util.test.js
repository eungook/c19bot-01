const util = require('./util');

describe('util.js', () => {
  describe('getYYYYMMDD()', () => {
    it('2020-09-07.', () => {
      const date = new Date('2020-09-07');
      const yyyymmdd = util.getYYYYMMDD(date);
      expect(yyyymmdd).toBe('20200907');
    });
  });

  describe('getKSTDate()', () => {
    it('2020-01-01 00:00:00', () => {
      const utc = new Date(Date.UTC(2020, 1, 1, 0, 0, 0, 0));
      const kst = util.getKSTDate(utc);
      expect(kst.getDate()).toBe(1);
      expect(kst.getHours()).toBe(9);
    });
  });
});