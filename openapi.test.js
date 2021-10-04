const openapi = require('./openapi');
const { getKSTDate, destructDate } = require('./util');

describe('openapi', () => {
  describe('조회', () => {
    it('2020년 9월 7일의 신규 확진자 수를 조회합니다.', async () => {
      const date = new Date('2020-09-07');
      const newDecideCnt = await openapi.init().getNewDecideCnt(date);
      console.log({ date, newDecideCnt });
      expect(newDecideCnt).toBeTruthy()
    }, 30000); // 30000: github actions에서 timeout나지 않도록

    const now = new Date();
    let kst = getKSTDate(now);
    const { h } = destructDate(kst);
    const isUpdate = (h > 10); // 데이터는 보통 한국 시각 오전 10시 이후에 갱신된다.
    if (isUpdate == false) {
      kst = new Date(kst.getTime() - (1 * 24 * 60 * 60)); // 아직 갱신되지 않았으므로 어제의 데이터를 확인한다.
    }
    const { yyyy, m, d } = destructDate(kst);

    it(`${yyyy}년 ${m}월 ${d}일의 신규 확진자 수를 조회합니다.`, async () => {
      const newDecideCnt = await openapi.init().getNewDecideCnt(kst);
      console.log({ kst, newDecideCnt });
      expect(newDecideCnt).toBeTruthy();
    }, 30000); // 30000: github actions에서 timeout나지 않도록
  });
});
