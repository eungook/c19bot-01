const Tweet = require('./tweet');
const OpenAPI = require('./openapi');
const { destructDate } = require('./util');

(async () => {
  // 확진자 수 조회
  const now = OpenAPI.getNewDecideCntDate();
  const newDecideCnt = await OpenAPI.getNewDecideCnt(now);
  console.log({ now, newDecideCnt });

  // 트윗
  const { yyyy, m, d } = destructDate(now);
  const status = `${yyyy}년 ${m}월 ${d}일 기준 일일 신규 확진자 수는 ${newDecideCnt}명 입니다.`;
  Tweet.update(status);
})();