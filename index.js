const Tweet = require('./tweet');
const OpenAPI = require('./openapi');
const { getKSTDate } = require('./util');

(async () => {
  // 확진자 수 조회
  const now = new Date();
  const kst = getKSTDate(now);
  console.log({ now, kst });
  const newDecideCnt = await OpenAPI.init().getNewDecideCnt(kst);
  console.log({ newDecideCnt });

  // 트윗
  const yyyy = kst.getFullYear();
  const m = kst.getMonth() + 1;
  const d = kst.getDate();
  const status = `${yyyy}년 ${m}월 ${d}일 기준 일일 신규 확진자 수는 ${newDecideCnt}명 입니다.`;
  Tweet.init().update(status);
})();