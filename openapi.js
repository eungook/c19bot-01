require('dotenv').config();
const fetch = require('node-fetch');
const { parseString } = require('xml2js');
const { getYYYYMMDD } = require('./util');

/**
 * OpenAPI와의 통신을 준비합니다.
 */
function init() {
  const obj = {
    getNewDecideCnt,
  };

  return obj;
}

/**
 * 해당 날짜의 새로운 확진자 수를 리턴한다.
 * @param date 조회할 날짜. Date 타입
 */
async function getNewDecideCnt(date) {
  const decideCnt1 = await getDecideCnt(date);
  
  const day = 1000 * 60 * 60 * 24; // millisecond * second * minute * hour
  const dayAgo = new Date(date.getTime() - day); // 하루 전 날
  const decideCnt2 = await getDecideCnt(dayAgo);

  const newDecideCnt = decideCnt1 - decideCnt2;
  return newDecideCnt;
}

/**
 * 공공데이터포털 오픈 API에서 조회한 누적 확진자 수를 리턴한다.
 * @param date 조회할 날짜. Date 타입
 */
async function getDecideCnt(date) {
  const SERVICE_KEY = process.env.OPEN_API_SERVICE_KEY;
  const createDt = getYYYYMMDD(date);

  const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson` +
    `?serviceKey=${SERVICE_KEY}` +
    `&startCreateDt=${createDt}` +
    `&endCreateDt=${createDt}`;
  const decideCnt = await fetch(url)
    .then(response => response.text())
    .then(xml => {
      let decideCnt;
      console.log({ createDt, xml });
      parseString(xml, (err, result) => decideCnt = Number(result.response.body[0].items[0].item[0].decideCnt[0]));
      return decideCnt;
    });
  
  return decideCnt;
};

module.exports = { init };