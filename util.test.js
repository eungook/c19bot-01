const util = require('./util');

describe('util.js', () => {
  describe('getYYYYMMDD().', () => {
    it('2020-09-07.', () => {
      const date = new Date('2020-09-07');
      const yyyymmdd = util.getYYYYMMDD(date);
      expect(yyyymmdd).toBe('20200907');
    });
  });
});