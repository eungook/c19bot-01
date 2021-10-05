require('dotenv').config();
const fetch = require('node-fetch');
const { parseString } = require('xml2js');
const { destructDate } = require('./util');
const { getKSTHours } = require('./kst-date');

/**
 * 현재 시각 기준 오픈 API에서 조회할 수 있는 최신 데이터 날짜를 계산한다.
 * @see [공공데이터활용지원센터_보건복지부 코로나19 감염 현황 - 공공데이터포털](https://www.data.go.kr/data/15043376/openapi.do)
 * @see 데이터는 보통 KST 기준 오전 10시 이후에 갱신된다.
 * @returns {Date}
 */
function getNewDecideCntDate() {
  const today = new Date();
  const h = getKSTHours(today);
  const isUpdate = (h > 10);
  if (isUpdate) {
    return today;

  } else {
    const day = (24 * 60 * 60); // h * m * s
    const yesterday = new Date(today.getTime() - day);
    return yesterday;
  }
}

/**
 * 해당 날짜의 새로운 확진자 수를 리턴한다.
 * @param {Date} 조회할 날짜
 */
async function getNewDecideCnt(date) {
  const decideCnt1 = await getDecideCnt(date);

  const day = 1000 * 60 * 60 * 24; // millisecond * second * minute * hour
  const dayAgo = new Date(date.getTime() - day); // 하루 전 날
  const decideCnt2 = await getDecideCnt(dayAgo);

  const newDecideCnt = new Intl.NumberFormat().format(decideCnt1 - decideCnt2)
  return newDecideCnt;
}

/**
 * 공공데이터포털 오픈 API에서 조회한 누적 확진자 수를 리턴한다.
 * 참고: 데이터는 보통 KST 기준 오전 10시 이후에 갱신된다.
 * @see [공공데이터활용지원센터_보건복지부 코로나19 감염 현황 - 공공데이터포털](https://www.data.go.kr/data/15043376/openapi.do)
 * @param {Date} date 조회할 날짜
 */
async function getDecideCnt(date) {
  const SERVICE_KEY = process.env.OPEN_API_SERVICE_KEY;
  const { yyyy, mm, dd } = destructDate(date);
  const createDt = `${yyyy}${mm}${dd}`;

  const url =
    `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson` +
    `?serviceKey=${SERVICE_KEY}` +
    `&startCreateDt=${createDt}` +
    `&endCreateDt=${createDt}`;
  const decideCnt = await fetch(url)
    .then(response => response.text())
    .then(xml => {
      let decideCnt = 0;
      parseString(xml, (err, result) => decideCnt = Number(result.response.body[0].items[0].item[0].decideCnt[0]));
      return decideCnt;
    })
    .catch(e => {
      console.log({
        where: 'getDecideCnt()',
        e,
      });
      throw e;
    });

  return decideCnt;
}

module.exports = { getNewDecideCntDate, getNewDecideCnt };