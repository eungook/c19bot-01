const openapi = require('./openapi');

describe('openapi', () => {
  describe('조회', () => {
    it('2020년 9월 7일의 신규 확진자 수를 조회합니다.', async () => {
      const date = new Date('2020-09-07');
      const newDecideCnt = await openapi.init().getNewDecideCnt(date);
      console.log({ newDecideCnt });
      expect(newDecideCnt).toBeGreaterThan(0);
    }, 10000); // 10000: github actions에서 timeout나지 않도록
  });
});