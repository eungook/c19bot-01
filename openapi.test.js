const OpenAPI = require('./openapi');
const { destructDate } = require('./util');
const { getKSTHours } = require('./kst-date');

describe('OpenAPI', () => {
  describe('getNewDecideCntDate()', () => {
    const today = new Date();
    const h = getKSTHours(today);
    const newDecideCntDate = OpenAPI.getNewDecideCntDate();
    console.log({
      today,
      h,
      newDecideCntDate,
    })
    expect(newDecideCntDate).toBeTruthy();
  });

  describe('조회', () => {
    it('2020년 9월 7일의 신규 확진자 수를 조회합니다.', async () => {
      const date = new Date('2020-09-07');
      const newDecideCnt = await OpenAPI.getNewDecideCnt(date);
      expect(newDecideCnt).toBeTruthy();
    }, 30000); // 30000: github actions에서 timeout나지 않도록

    const newDecideCntDate = OpenAPI.getNewDecideCntDate();
    const { yyyy, m, d } = destructDate(newDecideCntDate);
    console.log({ yyyy, m, d });

    it(`${yyyy}년 ${m}월 ${d}일의 신규 확진자 수를 조회합니다.`, async () => {
      const newDecideCnt = await OpenAPI.getNewDecideCnt(newDecideCntDate);
      expect(newDecideCnt).toBeTruthy();
    }, 30000); // 30000: github actions에서 timeout나지 않도록
  });
});
