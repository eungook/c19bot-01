const openapi = require('./openapi');
require('dotenv').config({ path: './test.env' });

describe('openapi', () => {
  describe('조회', () => {
    it('2020년 9월 6일의 신규 확진자 수를 조회합니다.', async () => {
      const serviceKey = process.env.OPEN_API_SERVICE_KEY;
      const date = new Date('2020-09-06');
      const newDecideCnt = await openapi.init(serviceKey).getNewDecideCnt(date);
      expect(newDecideCnt).toBeGreaterThan(0);
    });
  });
});