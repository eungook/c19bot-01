const openapi = require('./openapi');

describe('openapi', () => {
  describe('조회', () => {
    it('2020년 9월 6일의 신규 확진자 수를 조회합니다.', async () => {
      const serviceKey = 'RiUr3CxyNpF2k62vdb1NoUqVnxY3DoLbfimGRxncV9MPVkd50oqhN9ScMqkXJ6IwwI6WMTyMSlKQR1pE9US3Tg%3D%3D';
      const date = new Date('2020-09-06');
      const newDecideCnt = await openapi.init(serviceKey).getNewDecideCnt(date);
      expect(newDecideCnt).toBeGreaterThan(0);
    });
  });
});