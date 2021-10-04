const Tweet = require('./tweet');
const OpenAPI = require('./openapi');
const { getKSTDate, destructDate } = require('./util');

(async () => {
  // 확진자 수 조회
  const now = new Date();
  const kst = getKSTDate(now);
  const newDecideCnt = await OpenAPI.init().getNewDecideCnt(kst);
  console.log({ now, kst, newDecideCnt });

  // 트윗
  const { yyyy, m, d } = destructDate(kst);
  const status = `${yyyy}년 ${m}월 ${d}일 기준 일일 신규 확진자 수는 ${newDecideCnt}명 입니다.`;
  Tweet.init().update(status);
})();